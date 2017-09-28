using System;

namespace SvcFabricDinnerDemo.KitchenActor.Interfaces
{
    public class KitchenOrder
    {
        public Guid OrderId { get; set; }
        public Guid DishId { get; set; }
    }
}