import { State } from './State';
import { Properties } from './Properties';
import Button from 'react-bootstrap/Button';
import React from 'react';

/**
 * Step 3: Download.
 */
export class Step3 extends React.Component<Properties, State> {
  /**
   * Render the form.
   * @param {Properties} props The properties for the wizard.
   * @return {JSX.Element} Form fragment to collect the data.
   */
  render(): JSX.Element | null {
    if (this.props.currentStep !== 3) {
      return null;
    }
    // TODO: Wire up the download button.
    // TODO: Add a "start over" button.
    // TODO: Remove the "previous" button.
    return (
      <div>
        <ol>
          <li><strong>Click the button</strong> to download the prompt installer .inf file.</li>
          <li><strong>Right-click</strong> the saved .inf file.</li>
          <li><strong>Select &quot;Install&quot;</strong> to install your new context menu command prompt.</li>
        </ol>
        <Button>Download</Button>
      </div>
    );
  }
}
