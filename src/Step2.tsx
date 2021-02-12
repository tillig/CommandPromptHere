import { Properties } from './Properties';
import React from 'react';

/**
 * Step 2: Customize settings.
 * @param {Properties} props The properties for the wizard.
 * @return {JSX.Element} Form fragment to collect the data.
 */
function Step2(props: Properties): JSX.Element | null {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      Step 2 Form
    </div>
  );
}

export default Step2;
