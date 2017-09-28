using System;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;

namespace SvcFabricDinnerDemo.TableActor.Interfaces
{
    public class TableActorProxy
    {
        
        private readonly Uri _servicename = new Uri("fabric:/SvcFabricDinnerDemo/TableActorService");
        

        public ITableActor CreateActor(Guid orderId)
        {
            var actorId = new ActorId(orderId);
            return ActorProxy.Create<ITableActor>(actorId, this._servicename);
        }

    }
}