using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;

namespace SvcFabricDinnerDemo.TableActor.Interfaces
{
    public interface ITableActor : IActor
    {
        /// <returns></returns>
        Task AddOrder(TableOrder tableorder, CancellationToken cancellationToken);
        Task<List<TableOrder>> GetOrders(CancellationToken cancellationToken);
    }

    public class TableOrder
    {
        public Guid OrderId { get; set; }
        public decimal Price { get; set; }
        public DateTime? ServedAt { get; set; }
        public string Dish { get; set; }

        public string State { get; set; }
    }

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
