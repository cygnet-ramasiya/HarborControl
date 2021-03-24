using HarborControl.Model.Constants;
using System.ComponentModel.DataAnnotations;

namespace HarborControl.Model.Boat
{
    public class BoatModel
    {
        public BoatModel()
        {
            this.BoatStatus = BoatStatus.InQueue;
        }

        [Key]
        public int BoatId { get; set; }

        [Required]
        public BoatTypes BoatType { get; set; }

        [Required]
        public int BoatSpeed { get; set; }

        public int Duration { get; set; }
        public BoatStatus BoatStatus { get; set; }
    }
}
