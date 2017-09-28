using System;

namespace SvcFabricDinnerDemo.TableActor.Interfaces
{
    public class TableOrder
    {
        public Guid OrderId { get; set; }
        public decimal Price { get; set; }
        public DateTime? ServedAt { get; set; }
        public string Dish { get; set; }

        public string State { get; set; }
    }
}