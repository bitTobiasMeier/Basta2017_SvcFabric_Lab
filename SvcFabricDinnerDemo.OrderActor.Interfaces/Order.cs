using System;

namespace SvcFabricDinnerDemo.OrderActor.Interfaces
{
    public class Order
    {
        public Guid RestaurantId { get; set; }
        public Guid OrderId { get; set; }
        public Guid TableId { get; set; }
        public Guid DishId { get; set; }
        public decimal Price { get; set; }
        public DateTime? OrderTime { get; set; }
        public DateTime? ServedTime { get; set; }
        public OrderState OrderState { get; set; }
    }
}