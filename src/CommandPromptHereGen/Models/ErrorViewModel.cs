using System;

namespace CommandPromptHereGen.Models
{
    /// <summary>
    /// Model for reporting error information to the client.
    /// </summary>
    public class ErrorViewModel
    {
        /// <summary>
        /// Gets or sets the trace ID for the request.
        /// </summary>
        public string RequestId { get; set; }

        /// <summary>
        /// Gets a value indicating whether the request ID should be displayed.
        /// </summary>
        public bool ShowRequestId => !string.IsNullOrEmpty(this.RequestId);
    }
}
