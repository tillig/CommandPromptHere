using System;
using System.Collections.Generic;
using System.Linq;

namespace CommandPromptHereGen.PromptStrategies
{
	/// <summary>
	/// Strategy for a PowerShell prompt.
	/// </summary>
	public class PowerShellStrategy : IPromptStrategy
	{
		/// <summary>
		/// Gets the accelerator/menu text for the command prompt.
		/// </summary>
		/// <value>
		/// A <see cref="System.String"/> with the display text (including
		/// accelerator key) for the command prompt within the context menu.
		/// </value>
		public string Accelerator
		{
			get { return Properties.Resources.PowerShellStrategy_Accelerator; }
		}

		/// <summary>
		/// Gets the full command line to start the command prompt.
		/// </summary>
		/// <value>
		/// A <see cref="System.String"/> that contains the full command prompt
		/// </value>
		public string CommandLine
		{
			get { return @"""%11%\windowspowershell\v1.0\powershell.exe"" -NoExit ""cd '%1'"""; }
		}

		/// <summary>
		/// Gets the unique ID for the command prompt.
		/// </summary>
		/// <value>
		/// A <see cref="System.String"/> that uniquely identifies the type of command
		/// prompt. This value is used in the INF file and the registry.
		/// </value>
		public string Id
		{
			get { return "PowerShellHere"; }
		}

		/// <summary>
		/// Gets the display name of the command prompt.
		/// </summary>
		/// <value>
		/// A <see cref="System.String"/> with a short display name of the prompt
		/// represented by this package.
		/// </value>
		public string Name
		{
			get { return Properties.Resources.PowerShellStrategy_Name; }
		}
	}
}
