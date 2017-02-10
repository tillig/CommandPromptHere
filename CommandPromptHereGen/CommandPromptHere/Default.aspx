<%@ Page Language="C#" AutoEventWireup="true" EnableSessionState="False" EnableTheming="false" EnableViewState="true" CodeBehind="Default.aspx.cs" Inherits="CommandPromptHereGen.Views.WebForms.Default" %>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" xmlns:fb="http://ogp.me/ns/fb#" xmlns:og="http://ogp.me/ns#" itemscope="true" itemtype="http://schema.org/Product">
<head runat="server">
	<title>Command Prompt Here Generator</title>
	<meta itemprop="name" content="Command Prompt Here Generator" />
	<meta itemprop="description" content="The Command Prompt Here Generator allows you to easily create right-click context menu entries for opening different types Windows command prompt. From the standard command prompt to Powershell to Visual Studio prompts, add your favorite to the context menu." />
	<meta property="og:title" content="Command Prompt Here Generator" />
	<meta property="og:type" content="product" />
	<meta property="og:url" content="http://www.paraesthesia.com/CommandPromptHere/" />
	<meta property="og:image" content="" />
	<meta property="og:site_name" content="Paraesthesia" />
	<meta property="fb:admins" content="552085688" />
	<link href="~/Content/themes/pepper-grinder/jquery.ui.all.css" type="text/css" rel="Stylesheet" />
	<style type="text/css">
		body
		{
			font-family: Arial, Helvetica, Verdana, Sans-Serif;
		}
		legend
		{
			font-weight: bold;
		}
		div.accordion-title
		{
			padding: 5px 30px;
		}
		div.editor-label,
		div.editor-field
		{
			display: inline-block;
		}
		div.item
		{
			margin-bottom: 10px;
		}
		div.social-button
		{
			margin-bottom: 5px;
		}
		#CommandPromptHereWizard
		{
			font-size: small;
		}
		.disclaimer
		{
			font-size: x-small;
		}
		.disclaimer strong
		{
			color: Red;
		}
		.hint
		{
			margin: 0px;
			font-size: xx-small;
		}
		.wizard-header
		{
			background-color: Silver;
			font-size: x-large;
			text-align: left;
			padding: 5px;
		}
	</style>
</head>
<body>
<%-- Facebook SDK for Like button --%>
<div id="fb-root"></div>
<script>
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		fjs.parentNode.insertBefore(js, fjs);
	} (document, 'script', 'facebook-jssdk'));
</script>
<form id="form1" runat="server">
	<asp:ScriptManager runat="server">
		<Scripts>
			<asp:ScriptReference Name="jquery" />
			<asp:ScriptReference Name="jquery.ui.combined" />            
		</Scripts>
	</asp:ScriptManager>

	<h1>Windows "Command Prompt Here" Generator</h1>
	<asp:Wizard ID="CommandPromptHereWizard" runat="server" ActiveStepIndex="0" 
		DisplaySideBar="False" 
		onactivestepchanged="CommandPromptHereWizard_ActiveStepChanged">
		<HeaderStyle CssClass="wizard-header ui-state-default ui-widget-header" VerticalAlign="Middle" Wrap="False" />
		<WizardSteps>
			<asp:WizardStep runat="server" Title="Select Prompt">
				<p>This wizard allows you to generate a custom "Command Prompt Here" context menu item for Windows. After selecting the prompt and customizing text, a small installer will be generated for you so you can use your prompt.</p>
				<p>First, select the command prompt you'd like to appear in the context menu.</p>
				<asp:DropDownList ID="CommandList" runat="server" OnSelectedIndexChanged="CommandList_SelectedIndexChanged" /><br />
			</asp:WizardStep>
			<asp:WizardStep runat="server" Title="Customize" StepType="Finish">
				<p>If you like, customize the values for the prompt.</p>
				<p><strong>Do so at your own risk.</strong> These values will be used in the .INF installer file that gets generated. Not much validation happens here, so you can really hose yourself if you do it wrong.</p>
				<p><strong>Select "Finish" to download the prompt</strong> and see installation instructions.</p>
				<div class="accordion">
					<div class="accordion-title">Customize Values</div>
					<div>
						<p>Hover over each text field to see additional description of what it means.</p>
						<div class="item">
							<div class="editor-label">
								<asp:Label ID="PromptIdLabel" runat="server" AssociatedControlID="PromptId" Text="Prompt ID:" ToolTip='The Prompt ID is used in the name of the installer and as a registry key. It needs to be unique across all "prompt here" installs you do.' />
							</div>
							<div class="editor-field">
								<asp:TextBox ID="PromptId" runat="server" ToolTip='The Prompt ID is used in the name of the installer and as a registry key. It needs to be unique across all "prompt here" installs you do.' MaxLength="32" />
								<asp:RequiredFieldValidator ID="PromptIdRequiredValidator" runat="server" ControlToValidate="PromptId" ErrorMessage="You must supply a short prompt ID." Display="Dynamic" SetFocusOnError="true" />
								<asp:RegularExpressionValidator ID="PromptIdValidator" runat="server" ControlToValidate="PromptId" ErrorMessage="The ID must be a short name with 5 - 32 letters and numbers only. It must start with a letter." Display="Dynamic" ValidationExpression="^[A-Za-z][A-Za-z0-9]{5,32}$" SetFocusOnError="True" />
							</div>
						</div>
						<div class="item">
							<div class="editor-label">
								<asp:Label ID="InstallerNameLabel" runat="server" AssociatedControlID="InstallerName" Text="Installer Name:" ToolTip="The Installer Name appears in the list of uninstallers." />
							</div>
							<div class="editor-field">
								<asp:TextBox ID="InstallerName" runat="server" ToolTip="The Installer Name appears in the list of uninstallers." MaxLength="64" />
								<asp:RequiredFieldValidator ID="InstallerNameRequiredValidator" runat="server" ControlToValidate="InstallerName" ErrorMessage="You must supply an installer name." Display="Dynamic" SetFocusOnError="true" />
								<asp:RegularExpressionValidator ID="InstallerNameValidator" runat="server" ControlToValidate="InstallerName" ValidationExpression="^[+\w\s._()$']{1,64}$" ErrorMessage="Installer name may be letters, numbers, or any of ._()$'" Display="Dynamic" SetFocusOnError="True" />
							</div>
						</div>
						<div class="item">
							<div class="editor-label">
								<asp:Label ID="AcceleratorLabel" runat="server" AssociatedControlID="Accelerator" Text="Menu Text:" ToolTip="The text that shows up in the context menu." />
							</div>
							<div class="editor-field">
								<asp:TextBox ID="Accelerator" runat="server" ToolTip="The text that shows up in the context menu." />
								<asp:RequiredFieldValidator ID="AcceleratorRequiredFieldValidator" runat="server" ErrorMessage="You must enter text for the context menu." ControlToValidate="Accelerator" Display="Dynamic" SetFocusOnError="True" />
							</div>
							<p class="hint">Hint: Use an &amp; by a letter to make it a hot key. Example: Command &amp;Prompt Here</p>
						</div>
						<div class="item">
							<div class="editor-label">
								<asp:Label ID="CommandLineLabel" runat="server" AssociatedControlID="CommandLine" Text="Command Line:" ToolTip="The command line that will be used to start the prompt." />
							</div>
							<div class="editor-field">
								<asp:TextBox ID="CommandLine" runat="server" ToolTip="The command line that will be used to start the prompt." Columns="64" />
								<asp:RequiredFieldValidator ID="CommandLineRequiredFieldValidator" runat="server" ErrorMessage="You must enter text for the command line." ControlToValidate="CommandLine" Display="Dynamic" SetFocusOnError="True" />
							</div>
						</div>
					</div>
				</div>
			</asp:WizardStep>
			<asp:WizardStep runat="server" Title="Download" StepType="Complete">
				<ol>
				<li><strong>Click the button</strong> to download the prompt installer .inf file.</li>
				<li><strong>Right-click</strong> the saved .inf file.</li>
				<li><strong>Select "Install"</strong> to install your new context menu command prompt.</li>
				</ol>
				<p><asp:Button ID="Download" runat="server" Text="Download .INF" OnClick="Download_Click" /></p>
				<p><a href='<%= this.ResolveUrl("~/CommandPromptHere") %>'>Start a New Prompt Installer</a></p>
			</asp:WizardStep>
		</WizardSteps>
	</asp:Wizard>
	</form>
	<div class="social-button">
	<%-- Google Plus Button --%>
	<g:plusone annotation="inline"></g:plusone>
	</div>
	<div class="social-button">
	<%-- Facebook Like/Send Buttons --%>
	<div class="fb-like" data-href="http://www.paraesthesia.com/CommandPromptHere/" data-send="true" data-width="450" data-show-faces="true"></div>
	</div>

	<p class="disclaimer">Wizard created by <a href="http://www.paraesthesia.com">Travis Illig</a>. If you like it (or find any problems), <a href="http://www.paraesthesia.com">head over to his blog and drop him a line</a>.</p>
	<p class="disclaimer"><strong>DISCLAIMER:</strong> "Command Prompt Here" installers set registry values. While every effort has been made to test things, the truth is I don't have the ability to verify every installer works with every combination of OS, bitness, and tool. <strong>Using any generated installer from this tool is at your own risk.</strong> The installers here are free with no warranty expressed or implied.</p>

	<%-- Google Adsense --%>
	<script type="text/javascript"><!--
		google_ad_client = "ca-pub-9058541546510381";
		/* Command Prompt Here Generator */
		google_ad_slot = "7960782323";
		google_ad_width = 468;
		google_ad_height = 60;
		//-->
	</script>
	<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>

	<%-- Google Analytics --%>
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-1285161-7']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>

	<%-- Google Plus Button Script --%>
	<script type="text/javascript">
		(function () {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = 'https://apis.google.com/js/plusone.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();
	</script>

	<script type="text/javascript">
		$(function () {
			$("input:text, textarea").addClass("ui-corner-all");
			$("button, input:submit, a.button").button();
			$(".accordion").accordion({
				"header": "div.accordion-title",
				"heightStyle": "content",
				"collapsible": true,
				"active": false,
				"change": function (event, ui) {
					ui.oldHeader.blur();
				}
			});
		});
	</script>
</body>
</html>
