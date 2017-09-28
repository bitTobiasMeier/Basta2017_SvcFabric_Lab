using System;
using Microsoft.ServiceFabric.Services.Remoting.Client;

namespace SvcFabricDinnerDemo.DinnerMenuService.Interfaces
{
    public class MenuServiceProxyFactory
    {
        private readonly Uri _servicename = new Uri("fabric:/SvcFabricDinnerDemo/SvcFabricDinnerDemo.DinnerMenuService");
        public IDinnerMenuService CreateServiceProxy(Guid restaurantId)
        {
            var key = Hashcalculator.Calculate(restaurantId);
            return ServiceProxy.Create<IDinnerMenuService>(_servicename, key);
        }

        public IDinnerMenuAdminService CreateAdminServiceProxy(Guid restaurantId)
        {
            var key = Hashcalculator.Calculate(restaurantId);
            return ServiceProxy.Create<IDinnerMenuAdminService>(_servicename, key);
        }
    }
}