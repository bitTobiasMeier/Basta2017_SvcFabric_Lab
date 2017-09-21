using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Client;
using Microsoft.ServiceFabric.Services.Remoting;
using Microsoft.ServiceFabric.Services.Remoting.Client;

namespace SvcFabricDinnerDemo.RestaurantService.Interfaces
{
    public class Restaurant
    {
        public string Name { get; set; }
        public Guid Id { get; set; }
    }

    public class RestaurantTable
    {
        public int Tablenr { get; set; }
        public Guid Id { get; set; }
    }

    public interface IRestaurantAdminService : IService
    {
        Task<Restaurant> CreateRestaurant(Restaurant restaurant);
        Task<RestaurantTable> CreateTable(Guid restaurantId, RestaurantTable table);
    }

    public interface IRestaurantService : IService
    {
        Task<IEnumerable<Restaurant>> GetRestaurantsAsync();
        Task<Restaurant> GetRestaurantAsync(Guid restaurantId);
        Task<IEnumerable<RestaurantTable>> GetTablesOfRestaurant(Guid restaurantId);
        Task<RestaurantTable> GetTableAsync(Guid restaurantId, Guid tableId);
    }


    public class RestaurantServiceProxyFactory
    {
        private readonly Uri _servicename = new Uri("fabric:/SvcFabricDinnerDemo/SvcFabricDinnerDemo.RestaurantService");
        public RestaurantServiceProxyFactory()
        { }
        public IRestaurantService CreateServiceProxy()
        {
            return ServiceProxy.Create<IRestaurantService>(this._servicename, new ServicePartitionKey(0));
        }
        public IRestaurantAdminService CreateAdminServiceProxy()
        {
            return ServiceProxy.Create<IRestaurantAdminService>(this._servicename, new ServicePartitionKey(0));
        }
    }


}

