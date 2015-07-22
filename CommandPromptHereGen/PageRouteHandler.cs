using System;
using System.Security.Permissions;
using System.Security.Principal;
using System.Web;
using System.Web.Compilation;
using System.Web.Routing;
using System.Web.Security;
using System.Web.UI;

namespace CommandPromptHereGen
{
	// TODO: When updated to .NET 4.0, use the actual System.Web.Routing.PageRouteHandler.
	public class PageRouteHandler : IRouteHandler
	{
		private bool _useRouteVirtualPath;
		private Route _routeVirtualPath;

		public string VirtualPath { get; private set; }

		public bool CheckPhysicalUrlAccess { get; private set; }

		private Route RouteVirtualPath
		{
			get
			{
				if (this._routeVirtualPath == null)
				{
					this._routeVirtualPath = new Route(this.VirtualPath.Substring(2), (IRouteHandler)this);
				}
				return this._routeVirtualPath;
			}
		}

		public PageRouteHandler(string virtualPath)
			: this(virtualPath, true)
		{
		}

		public PageRouteHandler(string virtualPath, bool checkPhysicalUrlAccess)
		{
			if (string.IsNullOrEmpty(virtualPath) || !virtualPath.StartsWith("~/", StringComparison.OrdinalIgnoreCase))
			{
				throw new ArgumentException("Invalid virtual path for route handler.", "virtualPath");
			}
			this.VirtualPath = virtualPath;
			this.CheckPhysicalUrlAccess = checkPhysicalUrlAccess;
			this._useRouteVirtualPath = this.VirtualPath.Contains("{");
		}

		private bool CheckUrlAccess(string virtualPath, RequestContext requestContext)
		{
			IPrincipal user = requestContext.HttpContext.User ?? (IPrincipal)new GenericPrincipal((IIdentity)new GenericIdentity(string.Empty, string.Empty), new string[0]);
			return this.CheckUrlAccessWithAssert(virtualPath, requestContext, user);
		}

		[SecurityPermission(SecurityAction.Assert, Unrestricted = true)]
		private bool CheckUrlAccessWithAssert(string virtualPath, RequestContext requestContext, IPrincipal user)
		{
			return UrlAuthorizationModule.CheckUrlAccessForPrincipal(virtualPath, user, requestContext.HttpContext.Request.HttpMethod);
		}

		public virtual IHttpHandler GetHttpHandler(RequestContext requestContext)
		{
			if (requestContext == null)
			{
				throw new ArgumentNullException("requestContext");
			}
			string virtualPath = this.GetSubstitutedVirtualPath(requestContext);
			int length = virtualPath.IndexOf('?');
			if (length != -1)
			{
				virtualPath = virtualPath.Substring(0, length);
			}
			if (this.CheckPhysicalUrlAccess && !this.CheckUrlAccess(virtualPath, requestContext))
			{
				return (IHttpHandler)new UrlAuthFailureHandler();
			}
			else
			{
				return (IHttpHandler)(BuildManager.CreateInstanceFromVirtualPath(virtualPath, typeof(Page)) as Page);
			}
		}

		public string GetSubstitutedVirtualPath(RequestContext requestContext)
		{
			if (requestContext == null)
			{
				throw new ArgumentNullException("requestContext");
			}
			if (!this._useRouteVirtualPath)
			{
				return this.VirtualPath;
			}
			VirtualPathData virtualPath = this.RouteVirtualPath.GetVirtualPath(requestContext, requestContext.RouteData.Values);
			if (virtualPath == null)
			{
				return this.VirtualPath;
			}
			else
			{
				return "~/" + virtualPath.VirtualPath;
			}
		}
	}
}
