import { State } from './State';
import { Properties } from './Properties';
import React from 'react';

/**
 * Step 2: Customize settings.
 */
export class Step2 extends React.Component<Properties, State> {
  /**
   * Render the form.
   * @param {Properties} props The properties for the wizard.
   * @return {JSX.Element} Form fragment to collect the data.
   */
  render(): JSX.Element | null {
    if (this.props.currentStep !== 2) {
      return null;
    }
    // TODO: value and onChange for each field.
    // value={this.props.email} // Prop: The email input data
    // onChange={this.props.handleChange} // Prop: Puts data into state
    // TODO: Field validation.
    return (
      <div>
        <p>If you like, customize the values for the prompt.</p>
        <p><strong>Do so at your own risk.</strong> These values will be used in the .INF installer file that gets generated. Not much validation happens here, so you can really hose yourself if you do it wrong.</p>
        <p><strong>Select &quot;Finish&quot; to download the prompt</strong> and see installation instructions.</p>
        <div className="form-group">
          <label htmlFor="promptId">Prompt ID</label>
          <input type="text" className="form-control" id="promptId"></input>
        </div>
        <div className="form-group">
          <label htmlFor="installerName">Installer Name</label>
          <input type="text" className="form-control" id="installerName"></input>
        </div>
        <div className="form-group">
          <label htmlFor="accelerator">Menu Text</label>
          <input type="text" className="form-control" id="accelerator" aria-describedby="acceleratorHelpBlock"></input>
          <small id="acceleratorHelpBlock" className="form-text text-muted">Hint: Use an &amp; by a letter to make it a hot key. Example: Command &amp;Prompt Here</small>
        </div>
        <div className="form-group">
          <label htmlFor="commandLine">Command Line</label>
          <input type="text" className="form-control" id="commandLine"></input>
        </div>
      </div>
    );
  }
}
