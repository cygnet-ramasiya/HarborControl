using System.Collections.Generic;
using HarborControl.Model.Boat;

namespace HarborControl.Business.Boat
{
    public interface IBoatService
    {
        /// <summary>
        /// Generate number of random boats
        /// </summary>
        /// <param name="count">Number of boats you want to generate</param>
        /// <returns></returns>
        public IList<BoatModel> GenerateRandomBoats(int count);
    }
}
