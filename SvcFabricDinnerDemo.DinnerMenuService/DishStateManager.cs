using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Data;
using Microsoft.ServiceFabric.Data.Collections;
using SvcFabricDinnerDemo.DinnerMenuService.Interfaces;

namespace SvcFabricDinnerDemo.DinnerMenuService
{
    public interface IDishStateManager
    {
        ITransaction CreateTransaction();
        Task<Guid> AddDishAsync(ITransaction tx, Guid restaurantid, Dish dish);
        Task<List<Dish>> GetDishesAsync(ITransaction tx, Guid restaurantid);
        Task<Dish> GetDishAsync(ITransaction tx, Guid restaurantId, Guid dishId);
    }

    [DataContract]
    public class DishContract
    {
        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public decimal Price { get; set; }

        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public string ImageUrl { get; set; }
    }

    [DataContract]
    public sealed class DishesContract
    {
        public DishesContract(IEnumerable<DishContract> dishes)
        {
            Dishes = (dishes == null) ? ImmutableList<DishContract>.Empty : dishes.ToImmutableList();
        }

        [DataMember]
        public IEnumerable<DishContract> Dishes { get; private set; }

        [OnDeserialized]
        private void OnDeserialized(StreamingContext context)
        {
            Dishes = Dishes.ToImmutableList();
        }
    }

    public class DishStateManager : IDishStateManager
    {
        private const string RestaurantMenuListDictName = "RestaurantMenuListDictName";
        private readonly IReliableStateManagerReplica _stateManager;

        public DishStateManager(IReliableStateManagerReplica stateManager)
        {
            _stateManager = stateManager;
        }

        public ITransaction CreateTransaction()
        {
            return this._stateManager.CreateTransaction();
        }

        public async Task<Guid> AddDishAsync(ITransaction tx, Guid restaurantid, Dish dish)
        {
            try
            {
                var dictionary = await GetMenuCardDictionary();
                var conditionalValue = await dictionary.TryGetValueAsync(tx, restaurantid);
                var dishId = Guid.NewGuid();
                dish.Id = dishId;
                var dishesdata = conditionalValue.HasValue ? conditionalValue.Value : new DishesContract(null);
                var list = new List<DishContract>(dishesdata.Dishes)
         {
              new DishContract()
                  {
            Name = dish.Name,
            Price = dish.Price,
            Id = dishId,
            Description = dish.Description,
            ImageUrl = dish.ImageUrl
              }
           };
                //Erst nach dem Zurückschreiben der Liste ist das übergebene "Gericht" gespeichert.
                await dictionary.AddOrUpdateAsync(tx, restaurantid, new DishesContract(list),
                        (key, value) => new DishesContract(list));
                return dishId;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
            return Guid.Empty;
        }
        public async Task<Dish> GetDishAsync(ITransaction tx, Guid restaurantId, Guid dishId)
        {
            var dictionary = await GetMenuCardDictionary();
            var conditionalValue = await dictionary.TryGetValueAsync(tx, restaurantId);
            var list = conditionalValue.HasValue
                ? new List<DishContract>(conditionalValue.Value.Dishes)
                : new List<DishContract>();

            var dish = list.FirstOrDefault(d => d.Id == dishId);

            return dish != null ? new Dish()
            {
                Id = dishId,
                Name = dish.Name,
                Price = dish.Price,
                Description = dish.Description,
                ImageUrl = dish.ImageUrl
            } : null;
        }
        public async Task<List<Dish>> GetDishesAsync(ITransaction tx, Guid restaurantid)
        {
            var dictionary = await GetMenuCardDictionary();
            var conditionalValue = await dictionary.TryGetValueAsync(tx, restaurantid);
            var list = conditionalValue.HasValue
                    ? new List<DishContract>(conditionalValue.Value.Dishes)
                    : new List<DishContract>();
            return list.Select(entry => new Dish()
            {
                Name = entry.Name,
                Price = entry.Price,
                Id = entry.Id,
                Description = entry.Description,
                ImageUrl = entry.ImageUrl
            }).ToList();
        }
        private async Task<IReliableDictionary<Guid, DishesContract>> GetMenuCardDictionary()
        {
            return await this._stateManager.GetOrAddAsync<IReliableDictionary<Guid, DishesContract>>
                  (RestaurantMenuListDictName);
        }
    }
}
