using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Routing;

namespace CommandPromptHereGen
{
	public class RoutingModule : IHttpModule
	{
		private readonly static object _hasBeenRegisteredKey = new object();

		public void Dispose()
		{
		}

		public void Init(HttpApplication context)
		{
			if (context.Context.Items[RoutingModule._hasBeenRegisteredKey] != null)
			{
				return;
			}
			var path = ConfigurationManager.AppSettings["CmdHereGenRoute"];
			if (String.IsNullOrEmpty(path))
			{
				throw new ConfigurationErrorsException("Set appSettings for 'CmdHereGenRoute' to point to the command prompt generator (images/App/CommandPromptHere).");
			}
			var pageRouteHandler = new PageRouteHandler("~/Views/WebForms/CmdHereGen.aspx");
			var pageRoute = new Route(path, pageRouteHandler);
			RouteTable.Routes.Add(pageRoute);
			context.Context.Items[RoutingModule._hasBeenRegisteredKey] = RoutingModule._hasBeenRegisteredKey;
		}
	}
}