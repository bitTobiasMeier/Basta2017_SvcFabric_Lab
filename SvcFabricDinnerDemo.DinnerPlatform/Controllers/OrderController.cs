using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SvcFabricDinnerDemo.DinnerMenuService.Interfaces;
using SvcFabricDinnerDemo.OrderActor.Interfaces;
using SvcFabricDinnerDemo.TableActor.Interfaces;

namespace SvcFabricDinnerDemo.DinnerPlatform.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        [HttpPost()]
        public async Task<Order> Create([FromBody] Order order)
        {
            if (order == null) return null;
            try
            {
                var tableActor = new TableActorProxy().CreateActor(order.TableId);
                order.OrderId = Guid.NewGuid();
                var dish = await new MenuServiceProxyFactory().CreateServiceProxy(order.RestaurantId).GetDishAsync(order.RestaurantId, order.DishId);
                order.Price = dish.Price;
                var orderActor = new OrderActorProxy().CreateActor(order.OrderId);
                await orderActor.AddOrderAsync(order, CancellationToken.None);

                await tableActor.AddOrder(new TableOrder() { Dish = dish.Name, OrderId = order.OrderId, Price = dish.Price }, CancellationToken.None);

                return await orderActor.GetOrderAsync(CancellationToken.None);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw;
            }
        }

        [HttpGet("GetOrder/{orderId}")]
        public async Task<Order> GetOrderAsync(Guid orderId)
        {
            var orderActor = new OrderActorProxy().CreateActor(orderId);
            var order = await orderActor.GetOrderAsync(CancellationToken.None);
            return order;
        }

        [HttpGet("GetOrders/{tableId}")]
        public async Task<IEnumerable<TableOrder>> GetOrders(Guid tableId)
        {
            var orders = await new TableActorProxy().CreateActor(tableId).GetOrders(CancellationToken.None);
            return orders;
        }
    }

}
