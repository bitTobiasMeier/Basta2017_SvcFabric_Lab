using System;
using System.Fabric;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Data.Collections;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServiceFabric.Mocks;
using SvcFabricDinnerDemo.RestaurantService.Interfaces;

namespace SvcFabricDinnerDemo.RestaurantService.Tests
{
    [TestClass]
    public class UnitTestRestaurantService
    {
        [TestMethod]
        public async Task AddRestaurant()
        {
            var restaurantId = Guid.NewGuid();
            var restaurantName = "KleinAberFein";
            var context = MockStatefulServiceContextFactory.Default;
            var stateManager = new MockReliableStateManager();
            const string stateName = "RestaurantDictionaryName";
            var dic = await stateManager.GetOrAddAsync<IReliableDictionary<Guid, RestaurantService.RestaurantContract>>(stateName);
            await dic.TryAddAsync(new MockTransaction(), restaurantId,
                new RestaurantService.RestaurantContract(restaurantId, restaurantName));

            IRestaurantService svc = new RestaurantService(context, stateManager);

            var restaurant = await svc.GetRestaurantAsync(restaurantId);
            Assert.IsNotNull(restaurant);
            Assert.AreEqual(restaurantId, restaurant.Id);
            Assert.AreEqual(restaurantName, restaurant.Name);
        }



    }
}