using System;
using Microsoft.ServiceFabric.Services.Client;
using Microsoft.ServiceFabric.Services.Remoting.Client;

namespace SvcFabricDinnerDemo.RestaurantService.Interfaces
{
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