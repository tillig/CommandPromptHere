import { State } from './State';
import { Step3Properties } from './Properties';
import React from 'react';

/**
 * Step 3: Download.
 */
export class Step3 extends React.Component<Step3Properties, State> {
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
    return (
      <div>
        <div className="row">
          <ol>
            <li><strong>Click the button</strong> to download the prompt installer .inf file.</li>
            <li><strong>Right-click</strong> the saved .inf file.</li>
            <li><strong>Select &quot;Install&quot;</strong> to install your new context menu command prompt.</li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-2">
            <button
              className="btn btn-primary"
              type="button"
            // onClick={this._next}
            >
              Download
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.props.startOver}>
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }
}
