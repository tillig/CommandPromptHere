using System;

namespace CommandPromptHereGen.PromptStrategies
{
    /// <summary>
    /// Strategy for a VS2010 (x64) command prompt.
    /// </summary>
    public class VS2010X64CmdStrategy : IPromptStrategy
    {
        /// <summary>
        /// Gets the accelerator/menu text for the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> with the display text (including
        /// accelerator key) for the command prompt within the context menu.
        /// </value>
        public string Accelerator
        {
            get { return Properties.Resources.VS2010X64CmdStrategy_Accelerator; }
        }

        /// <summary>
        /// Gets the full command line to start the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> that contains the full command prompt.
        /// </value>
        public string CommandLine
        {
            // The /v:on allows for delayed environment variable processing using
            // !var! syntax instead of %var% syntax. Otherwise you can't expand
            // environment variables like %VS100COMNTOOLS% because %V has special meaning.
            get { return @"%11%\cmd.exe /v:on /k cd /d ""%1"" && ""!VS100COMNTOOLS!..\..\VC\vcvarsall.bat"" amd64"; }
        }

        /// <summary>
        /// Gets the unique ID for the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> that uniquely identifies the type of command
        /// prompt. This value is used in the INF file and the registry.
        /// </value>
        public string Id
        {
            get { return "VS2010X64CmdHere"; }
        }

        /// <summary>
        /// Gets the display name of the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> with a short display name of the prompt
        /// represented by this package.
        /// </value>
        public string Name
        {
            get { return Properties.Resources.VS2010X64CmdStrategy_Name; }
        }
    }
}
