using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Client;
using Microsoft.ServiceFabric.Services.Remoting;
using Microsoft.ServiceFabric.Services.Remoting.Client;

namespace SvcFabricDinnerDemo.DinnerMenuService.Interfaces
{
    public class Dish
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }

    public interface IDinnerMenuService : IService
    {
        Task<List<Dish>> GetDishesAsync(Guid restaurantId);
        Task<Dish> GetDishAsync(Guid restaurantId, Guid dishId);
    }

    public interface IDinnerMenuAdminService : IService
    {
        Task<Guid> AddDishAsync(Guid restaurantId, Dish dish);
    }

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
    public static class Hashcalculator
    {
        public static ServicePartitionKey Calculate(Guid id)
        {
            var md5 = MD5.Create();
            var value = md5.ComputeHash(Encoding.ASCII.GetBytes(id.ToString()));
            var key = BitConverter.ToInt64(value, 0);
            return new ServicePartitionKey(key);
        }
    }
}




