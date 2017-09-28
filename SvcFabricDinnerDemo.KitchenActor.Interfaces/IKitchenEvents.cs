using Microsoft.ServiceFabric.Actors;

namespace SvcFabricDinnerDemo.KitchenActor.Interfaces
{
    public interface IKitchenEvents : IActorEvents
    {
        void CookingStarted(ActorId actorId, KitchenOrder order);

        void CookingCompleted(ActorId actorId, KitchenOrder order);
    }
}