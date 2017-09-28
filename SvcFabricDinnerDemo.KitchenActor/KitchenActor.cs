using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Runtime;
using SvcFabricDinnerDemo.KitchenActor.Interfaces;

namespace SvcFabricDinnerDemo.KitchenActor
{
    /// <remarks>
    ///     This class represents an actor.
    ///     Every ActorID maps to an instance of this class.
    ///     The StatePersistence attribute determines persistence and replication of actor state:
    ///     - Persisted: State is written to disk and replicated.
    ///     - Volatile: State is kept in memory only and replicated.
    ///     - None: State is kept in memory only and not replicated.
    /// </remarks>
    [StatePersistence(StatePersistence.Persisted)]
    internal class KitchenActor : Actor, IKitchenActor, IRemindable
    {
        private const string KitchenQueueName = "KitchenQueue";
        private const string CookingQueueName = "CookingQueue";
        private const string CookingReminderName = "CookingReminder";

        /// <summary>
        ///     Initializes a new instance of KitchenActor
        /// </summary>
        /// <param name="actorService">The Microsoft.ServiceFabric.Actors.Runtime.ActorService that will host this actor instance.</param>
        /// <param name="actorId">The Microsoft.ServiceFabric.Actors.ActorId for this actor instance.</param>
        public KitchenActor(ActorService actorService, ActorId actorId)
            : base(actorService, actorId)
        {
        }

        public async Task AddOrderAsync(KitchenOrder kitchenOrder)
        {
            var queue = await GetKitchenQueue();
            queue.Enqueue(new KitchenOrderContract() { DishId = kitchenOrder.DishId, OrderId = kitchenOrder.OrderId });
            await StateManager.SetStateAsync(KitchenQueueName, queue);
            ActorEventSource.Current.ActorMessage(this,
                string.Format(CultureInfo.CurrentCulture, "Kitchen {0}: Order {1} added: Dish: {2}", Id.GetGuidId(),
                    kitchenOrder.OrderId, kitchenOrder.DishId));
            await RegisterReminderAsync(CookingReminderName, null, TimeSpan.FromSeconds(1),
                TimeSpan.FromSeconds(10));
        }

        public async Task<List<KitchenOrder>> GetKitchenQueue(CancellationToken none)
        {
            var queue = await GetKitchenQueue();
            return queue.Select(order => new KitchenOrder()
            {
                DishId = order.DishId,
                OrderId = order.OrderId
            }).ToList();
        }

        public async Task<List<KitchenOrder>> GetKitchenCookingQueue(CancellationToken none)
        {
            var queue = await GetCookingQueue();
            return queue.Select(order => new KitchenOrder()
            {
                DishId = order.DishId,
                OrderId = order.OrderId
            }).ToList();

        }

        public async Task ReceiveReminderAsync(string reminderName, byte[] state, TimeSpan dueTime, TimeSpan period)
        {
            switch (reminderName)
            {
                case CookingReminderName:
                    {
                        await CookAsync();
                        break;
                    }
                default:
                    {
                        throw new InvalidOperationException("Unexpected reminder in actor kitchen: " + reminderName);
                    }
            }
        }

        /// <summary>
        ///     This method is called whenever an actor is activated.
        ///     An actor is activated the first time any of its methods are invoked.
        /// </summary>
        protected override async Task OnActivateAsync()
        {
            ActorEventSource.Current.ActorMessage(this, "Kitchen Actor activated.");
            await StateManager.SetStateAsync(KitchenQueueName, await GetKitchenQueue());
            await StateManager.SetStateAsync(CookingQueueName, await GetCookingQueue());
        }

        private async Task<Queue<KitchenOrderContract>> GetKitchenQueue()
        {
            try
            {
                var kitchenOrderQuueConditiionalValue =
                    await StateManager.TryGetStateAsync<Queue<KitchenOrderContract>>(KitchenQueueName);
                var queue = kitchenOrderQuueConditiionalValue.HasValue
                    ? kitchenOrderQuueConditiionalValue.Value
                    : new Queue<KitchenOrderContract>();
                return queue;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new Queue<KitchenOrderContract>();
            }

        }

        private async Task<Queue<KitchenOrderContract>> GetCookingQueue()
        {
            var kitchenOrderQuueConditiionalValue =
                await StateManager.TryGetStateAsync<Queue<KitchenOrderContract>>(CookingQueueName);
            var queue = kitchenOrderQuueConditiionalValue.HasValue
                ? kitchenOrderQuueConditiionalValue.Value
                : new Queue<KitchenOrderContract>();
            return queue;
        }

        private async Task CookAsync()
        {
            var random = new Random();
            var check = random.Next(4);
            var events = GetEvent<IKitchenEvents>();
            var cookingQueue = await GetCookingQueue();
            //Nur bei einer Zufallszahl 1 ist das Gericht fertiggekocht.
            if (cookingQueue.Count > 0 && check == 1)
            {
                var cooked = cookingQueue.Dequeue();
                ActorEventSource.Current.ActorMessage(this,
                    string.Format(CultureInfo.CurrentCulture, "Kitchen {0}: Order {1} completed: Dish: {2}",
                        Id.GetGuidId(), cooked.OrderId, cooked.DishId));
                events.CookingCompleted(Id, new KitchenOrder()
                {
                    DishId = cooked.DishId,
                    OrderId = cooked.OrderId
                });
                await StateManager.SetStateAsync(CookingQueueName, cookingQueue);
            }
            var queue = await GetKitchenQueue();
            if (queue.Count > 0 && cookingQueue.Count < 5)
            {
                var dishToCook = queue.Dequeue();
                cookingQueue.Enqueue(dishToCook);
                ActorEventSource.Current.ActorMessage(this,
                    string.Format(CultureInfo.CurrentCulture, "Kitchen {0}: Cooking of order {1} started: Dish: {2}",
                        Id.GetGuidId(), dishToCook.OrderId, dishToCook.DishId));
                events.CookingStarted(Id, new KitchenOrder()
                {
                    DishId = dishToCook.DishId,
                    OrderId = dishToCook.OrderId
                });
                await StateManager.SetStateAsync(KitchenQueueName, queue);
                await StateManager.SetStateAsync(CookingQueueName, cookingQueue);
            }

        }

        [DataContract]
        public class KitchenOrderContract
        {
            [DataMember]
            public Guid OrderId { get; set; }
            [DataMember]
            public Guid DishId { get; set; }
        }
    }
}