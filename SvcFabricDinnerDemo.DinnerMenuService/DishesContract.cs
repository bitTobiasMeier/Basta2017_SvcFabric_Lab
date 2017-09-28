using System.Collections.Generic;
using System.Collections.Immutable;
using System.Runtime.Serialization;

namespace SvcFabricDinnerDemo.DinnerMenuService
{
    [DataContract]
    public sealed class DishesContract
    {
        public DishesContract(IEnumerable<DishContract> dishes)
        {
            Dishes = (dishes == null) ? ImmutableList<DishContract>.Empty : dishes.ToImmutableList();
        }

        [DataMember]
        public IEnumerable<DishContract> Dishes { get; private set; }

        [OnDeserialized]
        private void OnDeserialized(StreamingContext context)
        {
            Dishes = Dishes.ToImmutableList();
        }
    }
}