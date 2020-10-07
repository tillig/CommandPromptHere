using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CommandPromptHereGen.PromptStrategies
{
    /// <summary>
    /// Interface describing an individual "Command Prompt Here" package.
    /// </summary>
    public interface IPromptStrategy
    {
        /// <summary>
        /// Gets the accelerator/menu text for the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> with the display text (including
        /// accelerator key) for the command prompt within the context menu.
        /// </value>
        string Accelerator { get; }

        /// <summary>
        /// Gets the full command line to start the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> that contains the full command prompt.
        /// </value>
        string CommandLine { get; }

        /// <summary>
        /// Gets the unique ID for the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> that uniquely identifies the type of command
        /// prompt. This value is used in the INF file and the registry.
        /// </value>
        string Id { get; }

        /// <summary>
        /// Gets the display name of the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> with a short display name of the prompt
        /// represented by this package.
        /// </value>
        string Name { get; }
    }
}
