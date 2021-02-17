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
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
        // value={this.props.email} // Prop: The email input data
        // onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    );
  }
}
