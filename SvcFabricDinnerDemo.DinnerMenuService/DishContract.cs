using System;
using System.Runtime.Serialization;

namespace SvcFabricDinnerDemo.DinnerMenuService
{
    [DataContract]
    public class DishContract
    {
        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public decimal Price { get; set; }

        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public string ImageUrl { get; set; }
    }
}