using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SvcFabricDinnerDemo.RestaurantService.Interfaces;

namespace SvcFabricDinnerDemo.DinnerPlatform.Controllers
{
    [Route("api/[controller]")]
    public class RestaurantController : Controller
    {
        public RestaurantController()
        {
        }

        [HttpGet("Get/{restaurantId}")]
        public async Task<Restaurant> Get(Guid restaurantId)
        {
            try
            {
                var proxy = new RestaurantServiceProxyFactory().CreateServiceProxy();
                return await proxy.GetRestaurantAsync(restaurantId);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
            return null;
        }

        [HttpGet("GetTable/{restaurantId}/{tableId}")]
        public async Task<RestaurantTable> GetTable(Guid restaurantId, Guid tableId)
        {
            try
            {
                var proxy = new RestaurantServiceProxyFactory().CreateServiceProxy();
                return await proxy.GetTableAsync(restaurantId, tableId);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
            return null;
        }

    }
}