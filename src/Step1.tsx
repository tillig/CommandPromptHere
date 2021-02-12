import { Properties } from './Properties';
import React from 'react';

/**
 * Step 1: Select your prompt.
 * @param {Properties} props The properties for the wizard.
 * @return {React.ReactNode} The node to render.
 */
function Step1(props: Properties): JSX.Element | null {
  if (props.currentStep !== 1) {
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

export default Step1;
