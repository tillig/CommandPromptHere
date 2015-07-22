using System;
using System.Globalization;
using CommandPromptHereGen.PromptStrategies;

namespace CommandPromptHereGen
{
	/// <summary>
	/// Utility class for building .INF files.
	/// </summary>
	public static class InfBuilder
	{
		/// <summary>
		/// Builds an .INF file for installing a command prompt strategy.
		/// </summary>
		/// <param name="strategy">
		/// The <see cref="CommandPromptHereGen.PromptStrategies.IPromptStrategy"/>
		/// for which the .INF file should be built.
		/// </param>
		/// <returns>
		/// An .INF file that should be able to install the command prompt.
		/// </returns>
		public static string Build(IPromptStrategy strategy)
		{
			return String.Format(
				CultureInfo.InvariantCulture,
				Properties.Resources.InfTemplate,
				strategy.Id,
				strategy.Name,
				strategy.Accelerator,
				strategy.CommandLine.InfEncode());
		}

		/// <summary>
		/// Encodes a string for inclusion in an .INF file.
		/// </summary>
		/// <param name="toEncode">
		/// The string to encode.
		/// </param>
		/// <returns>
		/// The <paramref name="toEncode" /> string with escape characters/quotes
		/// fixed for inclusion in .INF.
		/// </returns>
		public static string InfEncode(this string toEncode)
		{
			if (String.IsNullOrEmpty(toEncode))
			{
				return toEncode;
			}
			return toEncode.Replace("\"", "\"\"");
		}
	}
}
