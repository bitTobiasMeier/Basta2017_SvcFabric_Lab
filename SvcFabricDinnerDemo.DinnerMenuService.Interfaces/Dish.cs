using System;
using System.Linq;

namespace SvcFabricDinnerDemo.DinnerMenuService.Interfaces
{
    public class Dish
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }
}




