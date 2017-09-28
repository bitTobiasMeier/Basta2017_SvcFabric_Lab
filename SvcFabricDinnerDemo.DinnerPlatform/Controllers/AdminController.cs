using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SvcFabricDinnerDemo.RestaurantService.Interfaces;

namespace SvcFabricDinnerDemo.DinnerPlatform.Controllers
{
    [Route("api/[controller]")]
    public partial class AdminController : Controller
    {
        public AdminController() { }
        [HttpGet("Get")]
        public async Task<IEnumerable<Restaurant>> Get()
        {
            var proxy = new RestaurantServiceProxyFactory().CreateServiceProxy();
            return await proxy.GetRestaurantsAsync();
        }
        [HttpPost("Create")]
        public async Task<Restaurant> Create([FromBody] Restaurant restaurant)
        {
            if (restaurant == null) return null;
            var proxy = new RestaurantServiceProxyFactory().CreateAdminServiceProxy();
            return await proxy.CreateRestaurant(restaurant);
        }
    }

}