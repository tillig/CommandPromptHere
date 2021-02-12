import { Properties } from './Properties';
import React from 'react';

/**
 * Step 3: Download.
 * @param {Properties} props The properties for the wizard.
 * @return {JSX.Element} Form fragment to collect the data.
 */
function Step3(props: Properties): JSX.Element | null {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      Step 3 Download { props.currentStep }
    </div>
  );
}

export default Step3;
