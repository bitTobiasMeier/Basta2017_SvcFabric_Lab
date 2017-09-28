using System;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Remoting;

namespace SvcFabricDinnerDemo.RestaurantService.Interfaces
{
    public interface IRestaurantAdminService : IService
    {
        Task<Restaurant> CreateRestaurant(Restaurant restaurant);
        Task<RestaurantTable> CreateTable(Guid restaurantId, RestaurantTable table);
    }
}