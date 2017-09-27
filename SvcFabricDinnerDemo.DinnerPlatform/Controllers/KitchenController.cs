using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SvcFabricDinnerDemo.KitchenActor.Interfaces;

namespace SvcFabricDinnerDemo.DinnerPlatform.Controllers
{
    [Route("api/[controller]")]
    public class KitchenController : Controller
    {
        [HttpGet("{restaurantId}/KitchenQueue")]
        public async Task<List<KitchenOrder>> GetKitchenQueue(Guid restaurantId)
        {
            var kitchenActor = new KitchenActorProxy().CreateActor(restaurantId);
            return await kitchenActor.GetKitchenQueue(CancellationToken.None);
        }

        [HttpGet("{restaurantId}/KitchenCookingQueue")]
        public async Task<List<KitchenOrder>> GetKitchenCookingQueue(Guid restaurantId)
        {
            var kitchenActor = new KitchenActorProxy().CreateActor(restaurantId);
            return await kitchenActor.GetKitchenCookingQueue(CancellationToken.None);

        }
    }
}
