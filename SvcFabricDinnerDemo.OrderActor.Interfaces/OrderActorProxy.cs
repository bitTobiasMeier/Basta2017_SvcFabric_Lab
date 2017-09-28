using System;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;

namespace SvcFabricDinnerDemo.OrderActor.Interfaces
{
    public class OrderActorProxy
    {
        private readonly Uri _servicename = new Uri("fabric:/SvcFabricDinnerDemo/OrderActorService");

        public IOrderActor CreateActor(Guid orderId)
        {
            var actorId = new ActorId(orderId);
            return ActorProxy.Create<IOrderActor>(actorId, this._servicename);
        }
    }
}