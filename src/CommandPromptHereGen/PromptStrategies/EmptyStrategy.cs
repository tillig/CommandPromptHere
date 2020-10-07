using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CommandPromptHereGen.PromptStrategies
{
    /// <summary>
    /// Empty prompt strategy for passing custom strategy-related data around.
    /// </summary>
    public class EmptyStrategy : IPromptStrategy
    {
        /// <summary>
        /// Gets or sets the accelerator/menu text for the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> with the display text (including
        /// accelerator key) for the command prompt within the context menu.
        /// </value>
        public string Accelerator { get; set; }

        /// <summary>
        /// Gets or sets the full command line to start the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> that contains the full command prompt.
        /// </value>
        public string CommandLine { get; set; }

        /// <summary>
        /// Gets or sets the unique ID for the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> that uniquely identifies the type of command
        /// prompt. This value is used in the INF file and the registry.
        /// </value>
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets the display name of the command prompt.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> with a short display name of the prompt
        /// represented by this package.
        /// </value>
        public string Name { get; set; }
    }
}
