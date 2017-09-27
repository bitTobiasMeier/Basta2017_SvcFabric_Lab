using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;

namespace SvcFabricDinnerDemo.OrderActor.Interfaces
{
    /// <summary>
    /// This interface defines the methods exposed by an actor.
    /// Clients use this interface to interact with the actor that implements it.
    /// </summary>
    public interface IOrderActor : IActor, IActorEventPublisher<IOrderEvents>
    {
        Task<Order> GetOrderAsync(CancellationToken cancellationToken);
        Task<Order> AddOrderAsync(Order order, CancellationToken cancellationToken);
    }

    public class Order
    {
        public Guid RestaurantId { get; set; }
        public Guid OrderId { get; set; }
        public Guid TableId { get; set; }
        public Guid DishId { get; set; }
        public decimal Price { get; set; }
        public DateTime? OrderTime { get; set; }
        public DateTime? ServedTime { get; set; }
        public OrderState OrderState { get; set; }
    }

    public enum OrderState
    {
        None = 0,
        Ordered = 1,
        InKitchenQueue = 2,
        Cooking = 3,
        Cooked = 4,
        Served = 5,
        Payed = 6
    }

    public class OrderActorProxy
    {
        private readonly Uri _servicename = new Uri("fabric:/SvcFabricDinnerDemo/OrderActorService");

        public IOrderActor CreateActor(Guid orderId)
        {
            var actorId = new ActorId(orderId);
            return ActorProxy.Create<IOrderActor>(actorId, this._servicename);
        }
    }

    public interface IOrderEvents : IActorEvents
    {
        void OrderServed(ActorId actorId, Guid dishId);

        void OrderStateChanged(ActorId actorId, OrderState state);
    }

}
