using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace CommandPromptHereGen
{
    /// <summary>
    /// Primary entry point for the generator.
    /// </summary>
    public static class Program
    {
        /// <summary>
        /// Program entry point method.
        /// </summary>
        /// <param name="args">Command line arguments for controlling behavior.</param>
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        /// <summary>
        /// Creates the web host for the application.
        /// </summary>
        /// <param name="args">Command line arguments for controlling behavior.</param>
        /// <returns>The host builder for continued configuration.</returns>
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
