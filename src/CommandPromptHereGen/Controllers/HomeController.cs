using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using CommandPromptHereGen.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CommandPromptHereGen.Controllers
{
    /// <summary>
    /// Primary workflow controller for generating command prompt INF files.
    /// </summary>
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="HomeController"/> class.
        /// </summary>
        /// <param name="logger">Diagnostic logger.</param>
        public HomeController(ILogger<HomeController> logger)
        {
            this._logger = logger;
        }

        /// <summary>
        /// Initial action for displaying the start step.
        /// </summary>
        /// <returns>The view with the first workflow step.</returns>
        public IActionResult Index()
        {
            return this.View();
        }

        /// <summary>
        /// Error handler.
        /// </summary>
        /// <returns>The view to display the error information.</returns>
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return this.View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? this.HttpContext.TraceIdentifier });
        }
    }
}
