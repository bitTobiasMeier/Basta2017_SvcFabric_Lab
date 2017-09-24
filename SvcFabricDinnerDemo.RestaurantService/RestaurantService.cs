using System;
using System.Collections.Generic;
using System.Fabric;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Data;
using Microsoft.ServiceFabric.Data.Collections;
using Microsoft.ServiceFabric.Services.Communication.Runtime;
using Microsoft.ServiceFabric.Services.Runtime;
using Microsoft.ServiceFabric.Services.Remoting.Runtime;
using SvcFabricDinnerDemo.RestaurantService.Interfaces;

namespace SvcFabricDinnerDemo.RestaurantService
{
    /// <summary>
    /// An instance of this class is created for each service replica by the Service Fabric runtime.
    /// </summary>
    public sealed class RestaurantService : StatefulService, IRestaurantService, IRestaurantAdminService
    {
        private const string RestaurantDictionaryName = "RestaurantDictionaryName ";
        private const string RestaurantTablesDictionaryName = "RestaurantTablesDictionaryName ";


        public RestaurantService(StatefulServiceContext context)
            : base(context)
        { }

        public RestaurantService(StatefulServiceContext serviceContext, IReliableStateManagerReplica reliableStateManagerReplica)
            : base(serviceContext, reliableStateManagerReplica)
        {
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

        async Task<Restaurant> IRestaurantAdminService.CreateRestaurant(Restaurant restaurant)
        {
            if (restaurant.Id != Guid.Empty) throw new Exception("restaurantId should not be set");
            using (var tx = this.StateManager.CreateTransaction())
            {
                var dic = await this.StateManager.GetOrAddAsync<IReliableDictionary<Guid, RestaurantContract>>(RestaurantDictionaryName);
                var id = Guid.NewGuid();
                await dic.AddAsync(tx, id, new RestaurantContract(id, restaurant.Name));
                await tx.CommitAsync();
                restaurant.Id = id;
                return restaurant;
            }
        }
        async Task<IEnumerable<Restaurant>> IRestaurantService.GetRestaurantsAsync()
        {
            var list = new List<Restaurant>();
            using (var tx = this.StateManager.CreateTransaction())
            {
                var dic = await this.StateManager.GetOrAddAsync<IReliableDictionary<Guid, RestaurantContract>>(RestaurantDictionaryName);
                var asyncEnumerable = await dic.CreateEnumerableAsync(tx);
                using (var asyncEnumerator = asyncEnumerable.GetAsyncEnumerator())
                {
                    while (await asyncEnumerator.MoveNextAsync(CancellationToken.None))
                    {
                        var contract = asyncEnumerator.Current.Value;
                        list.Add(new Restaurant() { Id = contract.Id, Name = contract.Name });
                    }
                }
                return list;
            }
        }
        async Task<Restaurant> IRestaurantService.GetRestaurantAsync(Guid restaurantId)
        {
            var list = new List<Restaurant>();
            using (var tx = this.StateManager.CreateTransaction())
            {
                var dic = await this.StateManager.GetOrAddAsync<IReliableDictionary<Guid, RestaurantContract>>(RestaurantDictionaryName);
                var result = await dic.TryGetValueAsync(tx, restaurantId);
                return result.HasValue ? new Restaurant() { Id = result.Value.Id, Name = result.Value.Name } : null;
            }
        }

        private static async Task<List<RestaurantTableContract>> GetTableList(Guid restaurantId, IReliableDictionary<Guid, List<RestaurantTableContract>> dic, ITransaction tx)
        {
            var tableListConditionalValue = (await dic.TryGetValueAsync(tx, restaurantId));
            var tableList = tableListConditionalValue.HasValue
                ? tableListConditionalValue.Value
                : new List<RestaurantTableContract>();
            return tableList;
        }
        async Task<RestaurantTable> IRestaurantAdminService.CreateTable(Guid restaurantId, RestaurantTable table)
        {
            using (var tx = this.StateManager.CreateTransaction())
            {
                var dic = await this.StateManager.GetOrAddAsync<IReliableDictionary<Guid, List<RestaurantTableContract>>>(RestaurantTablesDictionaryName);
                var id = Guid.NewGuid();
                table.Id = id;
                var tableList = await GetTableList(restaurantId, dic, tx);
                tableList.Add(new RestaurantTableContract(table.Id, table.Tablenr));
                await dic.AddOrUpdateAsync(tx, restaurantId, tableList, (key, value) => tableList);
                await tx.CommitAsync();
                return table;
            }
        }

        async Task<IEnumerable<RestaurantTable>> IRestaurantService.GetTablesOfRestaurant(Guid restaurantId)
        {
            using (var tx = this.StateManager.CreateTransaction())
            {
                var dic =
                    await this.StateManager.GetOrAddAsync<IReliableDictionary<Guid, List<RestaurantTableContract>>>(
              RestaurantTablesDictionaryName);
                var tableList = await GetTableList(restaurantId, dic, tx);
                return tableList.Select(t => new RestaurantTable()
                {
                    Id = t.Id,
                    Tablenr = t.TableNr
                });
            }
        }

        async Task<RestaurantTable> IRestaurantService.GetTableAsync(Guid restaurantId, Guid tableId)
        {
            using (var tx = this.StateManager.CreateTransaction())
            {
                var dic =
                    await this.StateManager.GetOrAddAsync<IReliableDictionary<Guid, List<RestaurantTableContract>>>(
              RestaurantTablesDictionaryName);
                var tableList = await GetTableList(restaurantId, dic, tx);
                return tableList.Where(t => t.Id == tableId).Select(t => new RestaurantTable() { Id = t.Id, Tablenr = t.TableNr }).FirstOrDefault();

            }
        }
        [DataContract]
        public class RestaurantContract
        {
            public RestaurantContract(Guid id, string name)
            {
                this.Id = id;
                this.Name = name;
            }
            [DataMember]
            public string Name { get; private set; }
            [DataMember]
            public Guid Id { get; private set; }
        }

        [DataContract]
        public class RestaurantTableContract
        {
            public RestaurantTableContract(Guid id, int tableNr)
            {
                this.Id = id;
                this.TableNr = tableNr;
            }
            [DataMember]
            public int TableNr { get; private set; }
            [DataMember]
            public Guid Id { get; private set; }
        }


        /// <summary>
        /// This is the main entry point for your service replica.
        /// This method executes when this replica of your service becomes primary and has write status.
        /// </summary>
        /// <param name="cancellationToken">Canceled when Service Fabric needs to shut down this service replica.</param>
        protected override async Task RunAsync(CancellationToken cancellationToken)
        {
            // TODO: Replace the following sample code with your own logic 
            //       or remove this RunAsync override if it's not needed in your service.

            var myDictionary = await this.StateManager.GetOrAddAsync<IReliableDictionary<string, long>>("myDictionary");

            while (true)
            {
                cancellationToken.ThrowIfCancellationRequested();

                using (var tx = this.StateManager.CreateTransaction())
                {
                    var result = await myDictionary.TryGetValueAsync(tx, "Counter");

                    ServiceEventSource.Current.ServiceMessage(this.Context, "Current Counter Value: {0}",
                        result.HasValue ? result.Value.ToString() : "Value does not exist.");

                    await myDictionary.AddOrUpdateAsync(tx, "Counter", 0, (key, value) => ++value);

                    // If an exception is thrown before calling CommitAsync, the transaction aborts, all changes are 
                    // discarded, and nothing is saved to the secondary replicas.
                    await tx.CommitAsync();
                }

                await Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
            }
        }
    }
}
