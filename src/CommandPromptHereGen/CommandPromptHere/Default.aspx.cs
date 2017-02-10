using CommandPromptHereGen.PromptStrategies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;

namespace CommandPromptHereGen.Views.WebForms
{
	public partial class Default : System.Web.UI.Page
	{
		// TODO: Add a "preview" of sorts to the second generator step.
		// TODO: When routing is available in Subtext, move this back to the Views/WebForms folder, call it CmdHereGen.aspx, and set up the routing module in web.config.
		private static readonly IEnumerable<IPromptStrategy> _strategies = typeof(IPromptStrategy).Assembly.GetStrategies();

		protected void Page_Init(object sender, EventArgs e)
		{
			foreach (var strategy in _strategies.OrderBy(s => s.Name))
			{
				this.CommandList.Items.Add(new ListItem(strategy.Name, strategy.Id));
			}
			if (!this.IsPostBack)
			{
				this.UpdateCustomizationFields();
			}
		}

		protected void CommandList_SelectedIndexChanged(object sender, EventArgs e)
		{
			this.UpdateCustomizationFields();
		}

		protected void UpdateCustomizationFields()
		{
			var strategy = _strategies.First(s => s.Id == this.CommandList.SelectedValue);
			this.Accelerator.Text = strategy.Accelerator;
			this.PromptId.Text = strategy.Id;
			this.InstallerName.Text = strategy.Name;
			this.CommandLine.Text = strategy.CommandLine;
		}

		protected void Download_Click(object sender, EventArgs e)
		{
			var strategy = new EmptyStrategy()
			{
				Accelerator = this.Accelerator.Text,
				CommandLine = this.CommandLine.Text,
				Id = this.PromptId.Text,
				Name = this.InstallerName.Text
			};
			var content = InfBuilder.Build(strategy);
			this.SendDownload(content);
		}

		protected void SendDownload(string content)
		{
			this.Response.Clear();
			this.Response.AddHeader("Content-Disposition", String.Format("attachment; filename={0}.inf", this.PromptId.Text));
			this.Response.AddHeader("Content-Length", content.Length.ToString());
			this.Response.ContentType = "application/octet-stream";
			this.Response.Write(content);
			this.Response.End();
		}

		protected void CommandPromptHereWizard_ActiveStepChanged(object sender, EventArgs e)
		{
			this.CommandPromptHereWizard.HeaderText = this.CommandPromptHereWizard.ActiveStep.Title;
		}
	}
}