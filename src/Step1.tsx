import { State } from './State';
import { Properties } from './Properties';
import React from 'react';

/**
 * Step 1: Select your prompt.
 */
export class Step1 extends React.Component<Properties, State> {
  /**
   * Render the form.
   * @param {Properties} props The properties for the wizard.
   * @return {React.ReactNode} The node to render.
   */
  render(): JSX.Element | null {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <p>This wizard allows you to generate a custom &quot;Command Prompt Here&quot; context menu item for Windows. After selecting the prompt and customizing text, a small installer will be generated for you so you can use your prompt.</p>
        <p>First, select the command prompt you&apos;d like to appear in the context menu.</p>
        <div className="form-group">
          <label htmlFor="commandList">Select command prompt</label>
          <select
            className="form-control"
            id="commandList"
            name="commandList"
          // value={this.props.email} // Prop: The email input data
          // onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>
      </div>
    );
  }
}
