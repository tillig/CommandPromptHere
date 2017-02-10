using System.Web.UI;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(CommandPromptHereGen.Startup))]

namespace CommandPromptHereGen
{
	public class Startup
	{
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
	}
}
