using System;
using System.Threading.Tasks;
using Data;
using Handlers.Auth;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("/api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly PostgresContext _db;

        public AuthController(PostgresContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Post()
        {
            try
            {
                var result = SignInHandler.Execute(_db, "", "");

                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}