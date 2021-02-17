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
    return (
      <div>
        Step 2 Form
      </div>
    );
  }
}
