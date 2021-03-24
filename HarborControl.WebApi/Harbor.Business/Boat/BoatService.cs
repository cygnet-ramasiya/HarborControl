using HarborControl.Utility;
using System.Collections.Generic;
using HarborControl.Model.Boat;
using HarborControl.Model.Constants;

namespace HarborControl.Business.Boat
{
    public class BoatService : IBoatService
    {

        #region Public Methods
        /// <summary>
        /// Generate number of random boats
        /// </summary>
        /// <param name="count">Number of boats you want to generate</param>
        /// <returns>Count of boats with required measurements</returns>
        public IList<BoatModel> GenerateRandomBoats(int count)
        {

            var boatList = new List<BoatModel>();
            for (int i = 1; i <= count; i++)
            {
                BoatModel boat = new BoatModel { BoatId = i, BoatType = Helper.GeRandomValue<BoatTypes>() };
                boatList.Add(boat);
            }

            // Get boat speed & duration as per randmly generated boats
            GetMeasurements(boatList);

            return boatList;
        }

        #endregion


        #region Private Methods

        /// <summary>
        /// Set boat speed & duration to list
        /// </summary>
        /// <param name="boatList">List of randomly generated boats</param>
        private static void GetMeasurements(List<BoatModel> boatList)
        {
            //Getting boats speed
            boatList.ForEach(x => x.BoatSpeed =
            (x.BoatType == BoatTypes.CargoShip ? Constants.CargoShipSpeed :
            (x.BoatType == BoatTypes.SailBoat ? Constants.SailBoatSpeed : Constants.SpeedBoatSpeed)));

            //Getting boats duration
            boatList.ForEach(x => x.Duration =
            (x.BoatType == BoatTypes.CargoShip ? Constants.CargoShipDuration :
            (x.BoatType == BoatTypes.SailBoat ? Constants.SailBoatDuration : Constants.SpeedBoatDuration)));

        }
        #endregion
    }
}
