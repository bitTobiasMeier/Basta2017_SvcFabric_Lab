using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Runtime;
using Microsoft.ServiceFabric.Actors.Client;
using SvcFabricDinnerDemo.KitchenActor.Interfaces;
using SvcFabricDinnerDemo.OrderActor.Interfaces;

namespace SvcFabricDinnerDemo.OrderActor
{
    /// <remarks>
    /// This class represents an actor.
    /// Every ActorID maps to an instance of this class.
    /// The StatePersistence attribute determines persistence and replication of actor state:
    ///  - Persisted: State is written to disk and replicated.
    ///  - Volatile: State is kept in memory only and replicated.
    ///  - None: State is kept in memory only and not replicated.
    /// </remarks>
    [StatePersistence(StatePersistence.Persisted)]
    internal class OrderActor : Actor, IOrderActor, IRemindable, IKitchenEvents
    {
        private const string OrderDataKey = "OrderDataKey";
        private const string OrderStateKey = "OrderStateKey";
        private const string ServedKey = "ServedKey ";
        private const string OrderStateReminder = "OrderStateReminder";

        public OrderActor(ActorService actorService, ActorId actorId) : base(actorService, actorId)
        {
        }

        public async Task<Order> GetOrderAsync(CancellationToken cancellationToken)
        {
            var val = await GetOrderContractAsync(cancellationToken);
            var orderstate = await GetOrderStateAsync();
            var servedtime = await StateManager.TryGetStateAsync<DateTime>(ServedKey, cancellationToken);
            return new Order
            {
                OrderId = Id.GetGuidId(),
                OrderTime = val.OrderTime,
                Price = val.Price,
                DishId = val.DishId,
                RestaurantId = val.RestaurantId,
                ServedTime = servedtime.HasValue ? servedtime.Value : (DateTime?) null,
                TableId = val.TableId,
                OrderState = orderstate
            };
        }

        public async Task<Order> AddOrderAsync(Order order, CancellationToken cancellationToken)
        {
            if (order == null) return null;
            var contract = new OrderContract(order.RestaurantId, order.TableId, order.DishId,
                order.Price,
                DateTime.Now);
            await StateManager.SetStateAsync(OrderDataKey, contract, cancellationToken);
            await this.SetOrderStateAsync(OrderState.Ordered);
            order.OrderId = Id.GetGuidId();

            //Register reminder
            await RegisterReminderAsync(
                OrderStateReminder,
                null,
                TimeSpan.FromSeconds(1),
                TimeSpan.FromSeconds(30));
            ActorEventSource.Current.ActorMessage(this, "New Order ID: {0}. Dish: {1}", Id.GetGuidId(),
                order.DishId);
            return order;
        }

        public async Task ReceiveReminderAsync(string reminderName, byte[] state, TimeSpan dueTime, TimeSpan period)
        {
            switch (reminderName)
            {
                case OrderStateReminder:
                {
                    await ProcessStateAsync();
                    break;
                }
                default:
                {
                    throw new InvalidOperationException("Unexpected reminder: " + reminderName);
                }
            }
        }

        /// <inheritdoc />
        protected override async Task OnActivateAsync()
        {
            ActorEventSource.Current.ActorMessage(this, "Orderactor activated. Id: " + Id.GetGuidId());
            var state = await GetOrderStateAsync();
            if (state != OrderState.None)
                await RegisterReminderAsync(
                    OrderStateReminder,
                    null,
                    TimeSpan.FromSeconds(1),
                    TimeSpan.FromSeconds(30));
        }

        private async Task<OrderContract> GetOrderContractAsync(CancellationToken cancellationToken)
        {
            var orderconstract =
                await StateManager.TryGetStateAsync<OrderContract>(OrderDataKey, cancellationToken);
            if (!orderconstract.HasValue)
                return null;
            var val = orderconstract.Value;
            return val;
        }

        private async Task<OrderState> GetOrderStateAsync()
        {
            var orderstate = await StateManager.TryGetStateAsync<int>(OrderStateKey, CancellationToken.None);
            if (orderstate.HasValue) return (OrderState) orderstate.Value;
            return OrderState.None;
        }

        private async Task SetOrderStateAsync(OrderState state)
        {
            await StateManager.SetStateAsync(OrderStateKey, (int) state);
            //  var events = GetEvent<IOrderEvents>();
            //  events.OrderStateChanged(this.Id, state);
        }

        private async Task ProcessStateAsync()
        {
            var state = await GetOrderStateAsync();
            switch (state)
            {
                case OrderState.Ordered:
                {
                    //ToDo: Küche benachrichten
                    var order = await GetOrderContractAsync(CancellationToken.None);
                     var kitchenActor = new KitchenActorProxy().CreateActor(order.RestaurantId);
                     await kitchenActor.SubscribeAsync<IKitchenEvents>(this);
                     await kitchenActor.AddOrderAsync(new KitchenOrder
                     {
                         DishId = order.DishId,
                         OrderId = Id.GetGuidId()
                     });
                    await SetOrderStateAsync(OrderState.InKitchenQueue);
                    break;
                }
                case OrderState.Cooked:
                {
                    //ToDo: Kellner informieren
                    var order = await GetOrderContractAsync(CancellationToken.None);
                    var events = GetEvent<IOrderEvents>();
                    events.OrderServed(Id, order.DishId);
                    break;
                }
                case OrderState.Payed:
                {
                    //Unregister reminder
                    var reminder = GetReminder(OrderStateReminder);
                    await UnregisterReminderAsync(reminder);
                    break;
                }
            }
        }

        async void IKitchenEvents.CookingStarted(ActorId actorId, KitchenOrder order)
        {
            await SetOrderStateAsync(OrderState.Cooking);
        }

        async void IKitchenEvents.CookingCompleted(ActorId actorId, KitchenOrder order)
        {
            await SetOrderStateAsync(OrderState.Cooked);
            var kitchenActor = new KitchenActorProxy().CreateActor(actorId.GetGuidId());
            await kitchenActor.UnsubscribeAsync<IKitchenEvents>(this);
        }

        [DataContract]
        private class OrderContract
        {
            public OrderContract(Guid restaurantId, Guid tableId, Guid dishId, decimal price,
                DateTime? orderTime)
            {
                RestaurantId = restaurantId;
                TableId = tableId;
                DishId = dishId;
                Price = price;
                OrderTime = orderTime;
            }

            [DataMember]
            public Guid RestaurantId { get; private set; }

            [DataMember]
            public Guid TableId { get; private set; }

            [DataMember]
            public Guid DishId { get; private set; }

            [DataMember]
            public decimal Price { get; private set; }

            [DataMember]
            public DateTime? OrderTime { get; private set; }
        }
    }
}