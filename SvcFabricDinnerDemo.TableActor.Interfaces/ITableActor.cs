using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;

namespace SvcFabricDinnerDemo.TableActor.Interfaces
{
    public interface ITableActor : IActor
    {
        /// <returns></returns>
        Task AddOrder(TableOrder tableorder, CancellationToken cancellationToken);
        Task<List<TableOrder>> GetOrders(CancellationToken cancellationToken);
    }
}
