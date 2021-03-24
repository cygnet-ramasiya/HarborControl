using System;
using System.Collections.Generic;
using System.Text;

namespace HarborControl.Model.Constants
{
    //Tree types of boats
    public enum BoatTypes
    {
        CargoShip = 1,
        SailBoat = 2,
        SpeedBoat = 3
    }

    //Boat status
    public enum BoatStatus
    {
        InQueue = 1,
        InProgress = 2,
        Completed = 3,
        CannotProcess = 4
    }
}
