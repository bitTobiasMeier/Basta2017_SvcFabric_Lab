using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Data;
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
}