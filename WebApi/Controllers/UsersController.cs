using System;
using System.Threading.Tasks;
using Data;
using Handlers.Users;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("/api/users")]
    public class UsersController : ControllerBase
    {
        private readonly PostgresContext _db;

        public UsersController(PostgresContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserCreate command)
        {
            try
            {
                var result = await UserCreateHandler.Execute(_db, command);

                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}