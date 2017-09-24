using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SvcFabricDinnerDemo.DinnerMenuService.Interfaces;
using SvcFabricDinnerDemo.RestaurantService.Interfaces;

namespace SvcFabricDinnerDemo.DinnerPlatform.Controllers
{
    [Route("api/[controller]")]
    public class RestaurantAdminController : Controller
    {
        [HttpGet("{restaurantId}")]
        public async Task<IEnumerable<Dish>> GetMenuCard(string restaurantId)
        {
            var id = Guid.Parse(restaurantId);
            return await new MenuServiceProxyFactory().CreateServiceProxy(id).GetDishesAsync(id);
        }
        [HttpPost("{restaurantId}")]
        public async Task<Dish> AddDish(string restaurantId, [FromBody] Dish dish)
        {
            var id = Guid.Parse(restaurantId);
            var id2 = await new MenuServiceProxyFactory().CreateAdminServiceProxy(id).AddDishAsync(id, dish);
            dish.Id = id;
            return dish;
        }
        [HttpPost("CreateTable/{restaurantId}")]
        public async Task<RestaurantTable> CreateTable(Guid restaurantId, [FromBody] RestaurantTable table)
        {
            if (table == null) return null;
            try
            {
                var proxy = new RestaurantServiceProxyFactory().CreateAdminServiceProxy();
                return await proxy.CreateTable(restaurantId, table);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
            return null;
        }
        [HttpGet("GetTables/{restaurantId}")]
        public async Task<IEnumerable<RestaurantTable>> GetTables(Guid restaurantId)
        {
            var proxy = new RestaurantServiceProxyFactory().CreateServiceProxy();
            return await proxy.GetTablesOfRestaurant(restaurantId);
        }
    }
}

