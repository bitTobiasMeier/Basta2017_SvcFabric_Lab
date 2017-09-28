using System;
using System.Collections.Generic;
using System.Fabric;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Data;
using Microsoft.ServiceFabric.Data.Collections;
using Microsoft.ServiceFabric.Services.Communication.Runtime;
using Microsoft.ServiceFabric.Services.Remoting.Runtime;
using Microsoft.ServiceFabric.Services.Runtime;
using SvcFabricDinnerDemo.DinnerMenuService.Interfaces;

namespace SvcFabricDinnerDemo.DinnerMenuService
{
    /// <summary>
    /// An instance of this class is created for each service replica by the Service Fabric runtime.
    /// </summary>
    internal sealed class DinnerMenuService : StatefulService, IDinnerMenuService, IDinnerMenuAdminService
    {
        private readonly IDishStateManager _dishStateManager;
        private const string RestaurantIdToMenucardsDictionaryname = "dishDic";

        public DinnerMenuService(StatefulServiceContext context, IDishStateManager dishStateManager,
   IReliableStateManagerReplica stateManager)
   : base(context, stateManager)
        {
            _dishStateManager = dishStateManager;
        }

        public async Task<Guid> AddDishAsync(Guid restaurantId, Dish dish)
        {
            using (var tx = this._dishStateManager.CreateTransaction())
            {
                var result = await this._dishStateManager.AddDishAsync(tx, restaurantId, dish);
                await tx.CommitAsync();
                return result;
            }
        }
        public async Task<List<Dish>> GetDishesAsync(Guid restaurantId)
        {
            using (var tx = this._dishStateManager.CreateTransaction())
            {
                return await this._dishStateManager.GetDishesAsync(tx, restaurantId);
            }
        }

        public async Task<Dish> GetDishAsync(Guid restaurantId, Guid dishId)
        {
            using (var tx = this._dishStateManager.CreateTransaction())
            {
                return await this._dishStateManager.GetDishAsync(tx, restaurantId, dishId);
            }
        }
        protected override IEnumerable<ServiceReplicaListener> CreateServiceReplicaListeners()
        {
            return new[]
               {
               new ServiceReplicaListener(
               this.CreateServiceRemotingListener
               )
          };
        }
    }
}
