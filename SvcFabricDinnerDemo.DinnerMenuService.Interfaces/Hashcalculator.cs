using System;
using System.Security.Cryptography;
using System.Text;
using Microsoft.ServiceFabric.Services.Client;

namespace SvcFabricDinnerDemo.DinnerMenuService.Interfaces
{
    public static class Hashcalculator
    {
        public static ServicePartitionKey Calculate(Guid id)
        {
            var md5 = MD5.Create();
            var value = md5.ComputeHash(Encoding.ASCII.GetBytes(id.ToString()));
            var key = BitConverter.ToInt64(value, 0);
            return new ServicePartitionKey(key);
        }
    }
}