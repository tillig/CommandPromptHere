using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace CommandPromptHereGen
{
    /// <summary>
    /// Startup orchestration for the web application.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Startup"/> class.
        /// </summary>
        /// <param name="configuration">Application configuration.</param>
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        /// <summary>
        /// Gets the application configuration.
        /// </summary>
        public IConfiguration Configuration { get; }

        /// <summary>
        /// Configures dependency injection services.
        /// </summary>
        /// <param name="services">The service collection with which dependencies should be registered.</param>
        [SuppressMessage("CA1822", "CA1822", Justification = "Startup methods are instance by convention.")]
        public void ConfigureServices(IServiceCollection services)
        {
            // TODO: Register IEnumerable<IPromptStrategy> _strategies = typeof(IPromptStrategy).Assembly.GetStrategies()
            services.AddControllersWithViews();
        }

        /// <summary>
        /// Configures the application request pipeline.
        /// </summary>
        /// <param name="app">The application instance to configure.</param>
        /// <param name="env">The environment in which the application is running.</param>
        [SuppressMessage("CA1822", "CA1822", Justification = "Startup methods are instance by convention.")]
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}

/*
        public void Configuration(IAppBuilder app)
        {
            var jQueryVersion = "3.1.1";
            var jQueryUIVersion = "1.12.1";

            var jQuery = new ScriptResourceDefinition
            {
                Path = $"~/Scripts/jquery-{jQueryVersion}.min.js",
                DebugPath = $"~/Scripts/jquery-{jQueryVersion}.js",
                CdnPath = $"//ajax.aspnetcdn.com/ajax/jQuery/jquery-{jQueryVersion}.min.js",
                CdnDebugPath = $"//ajax.aspnetcdn.com/ajax/jQuery/jquery-{jQueryVersion}.js"
            };
            ScriptManager.ScriptResourceMapping.AddDefinition("jquery", jQuery);

            var jQueryUI = new ScriptResourceDefinition
            {
                Path = $"~/Scripts/jquery-ui-{jQueryUIVersion}.min.js",
                DebugPath = $"~/Scripts/jquery-ui-{jQueryUIVersion}.js",
                CdnPath = $"//ajax.aspnetcdn.com/ajax/jquery.ui/{jQueryUIVersion}/jquery-ui.min.js",
                CdnDebugPath = $"//ajax.aspnetcdn.com/ajax/jquery.ui/{jQueryUIVersion}/jquery-ui.js"
            };
            ScriptManager.ScriptResourceMapping.AddDefinition("jquery.ui.combined", jQueryUI);
        }
*/
