import { State } from './State';
import { Step2Properties } from './Properties';
import React from 'react';

/**
 * Step 2: Customize settings.
 */
export class Step2 extends React.Component<Step2Properties, State> {
  /**
   * Render the form.
   * @returns {React.JSX.Element} Form fragment to collect the data.
   */
  render(): React.JSX.Element | null {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <p>If you like, customize the values for the prompt.</p>
        <p><strong>Do so at your own risk.</strong> These values will be used in the .INF installer file that gets generated. Not much validation happens here, so you can really hose yourself if you do it wrong.</p>
        <p><strong>Select &quot;Finish&quot; to download the prompt</strong> and see installation instructions.</p>
        <div className="form-group">
          <label htmlFor="prompt_id" className="form-label">Prompt ID</label>
          <input type="text" className="form-control" id="prompt_id" onChange={this.props.handleChange} value={this.props.prompt?.id} required={true} />
          <div className="invalid-feedback">
            Please choose a username.
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="prompt_name" className="form-label">Installer Name</label>
          <input type="text" className="form-control" id="prompt_name" onChange={this.props.handleChange} value={this.props.prompt?.name} required={true} />
        </div>
        <div className="form-group">
          <label htmlFor="prompt_accelerator" className="form-label">Menu Text</label>
          <input type="text" className="form-control" id="prompt_accelerator" aria-describedby="acceleratorHelpBlock" onChange={this.props.handleChange} value={this.props.prompt?.accelerator} required={true} />
          <small id="acceleratorHelpBlock" className="form-text text-muted">Hint: Use an &amp; by a letter to make it a hot key. Example: Command &amp;Prompt Here</small>
        </div>
        <div className="form-group">
          <label htmlFor="prompt_commandLine" className="form-label">Command Line</label>
          <input type="text" className="form-control" id="prompt_commandLine" onChange={this.props.handleChange} value={this.props.prompt?.commandLine} required={true} />
        </div>
      </div>
    );
  }
}
