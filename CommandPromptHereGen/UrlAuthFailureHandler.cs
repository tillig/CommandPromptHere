using System;
using System.Web;

namespace CommandPromptHereGen
{
	// TODO: When updated to .NET 4.0, remove this class.
	public sealed class UrlAuthFailureHandler : IHttpHandler
	{
		public bool IsReusable
		{
			get
			{
				return true;
			}
		}

		public void ProcessRequest(HttpContext context)
		{
			throw new NotImplementedException();
		}
	}
}