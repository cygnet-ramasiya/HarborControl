using Microsoft.AspNetCore.Mvc;
using System;
using HarborControl.Business.Boat;
using Serilog;

namespace Boat.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {

        #region Private Variables     

        private readonly IBoatService _boatService;

        #endregion

        #region Constructor

        public BoatController(IBoatService boatService)
        {
            _boatService = boatService;
        }

        #endregion

        /// <summary>
        /// This Action will be used to Generate random boats
        /// </summary>
        /// <param name="count">Number of boats you want to generate.</param>
        /// <returns></returns>
        [HttpGet("[action]")]
        //[Route("GenerateRandomBoats")]
        public IActionResult GenerateRandomBoats(int count)
        {
            try
            {
                return Ok(_boatService.GenerateRandomBoats(count));
            }
            catch (Exception ex)
            {
                Log.Logger.Error(ex, "An error occurred in GenerateRandomBoats.");
                return StatusCode(500, ex.Message);
            }
        }
    }
}
