using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;

namespace SvcFabricDinnerDemo.KitchenActor.Interfaces
{
    /// <summary>
    /// This interface defines the methods exposed by an actor.
    /// Clients use this interface to interact with the actor that implements it.
    /// </summary>
    public interface IKitchenActor : IActor, IActorEventPublisher<IKitchenEvents>
    {
        Task AddOrderAsync(KitchenOrder kitchenOrder);
        Task<List<KitchenOrder>> GetKitchenQueue(CancellationToken none);
        Task<List<KitchenOrder>> GetKitchenCookingQueue(CancellationToken none);
    }


    public interface IKitchenEvents : IActorEvents
    {
        void CookingStarted(ActorId actorId, KitchenOrder order);

        void CookingCompleted(ActorId actorId, KitchenOrder order);
    }


    public class KitchenOrder
    {
        public Guid OrderId { get; set; }
        public Guid DishId { get; set; }
    }



    public class KitchenActorProxy
    {

        private readonly Uri _servicename = new Uri("fabric:/SvcFabricDinnerDemo/KitchenActorService");


        public IKitchenActor CreateActor(Guid orderId)
        {
            var actorId = new ActorId(orderId);
            return ActorProxy.Create<IKitchenActor>(actorId, this._servicename);
        }
    }
}