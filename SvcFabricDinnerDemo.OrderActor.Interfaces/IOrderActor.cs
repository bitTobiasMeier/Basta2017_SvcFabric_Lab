using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;

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
}
