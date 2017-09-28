using System;
using Microsoft.ServiceFabric.Actors;

namespace SvcFabricDinnerDemo.OrderActor.Interfaces
{
    public interface IOrderEvents : IActorEvents
    {
        void OrderServed(ActorId actorId, Guid dishId);

        void OrderStateChanged(ActorId actorId, OrderState state);
    }
}