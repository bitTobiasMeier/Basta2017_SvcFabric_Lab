using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Remoting;

namespace SvcFabricDinnerDemo.DinnerMenuService.Interfaces
{
    public interface IDinnerMenuService : IService
    {
        Task<List<Dish>> GetDishesAsync(Guid restaurantId);
        Task<Dish> GetDishAsync(Guid restaurantId, Guid dishId);
    }
}