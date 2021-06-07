import { Properties } from './Properties';
import { State } from './State';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import React from 'react';
import { PromptStrategies } from './PromptStrategies';

/**
 * Main form that orchestrates the wizard.
 */
export class MasterForm extends React.Component<Properties, State> {
  /**
   * Constructor.
   * @param {Properties} props The properties for the workflow.
   */
  constructor(props: Properties) {
    super(props);
    this.state = {
      currentStep: 1,
      promptId: PromptStrategies[0].id,
      prompt: PromptStrategies[0],
      formValid: true,
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this._resetForm = this._resetForm.bind(this);
    this._validateForm = this._validateForm.bind(this);
    this.handlePromptSelectionChange = this.handlePromptSelectionChange.bind(this);
    this.handlePromptDetailChange = this.handlePromptDetailChange.bind(this);
  }

  /**
   * Move to the next step.
   */
  _next(): void {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  /**
   * Back to the previous step.
   */
  _prev(): void {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  /**
   * Checks the form validity and updates state.
   */
  _resetForm(): void {
    this.setState({
      currentStep: 1,
      promptId: PromptStrategies[0].id,
      prompt: PromptStrategies[0],
      formValid: true,
    });
  }

  /**
   * Checks the form validity and updates state.
   */
  _validateForm(): void {
    const form = document.getElementById('commandPromptHere') as HTMLFormElement;
    this.setState({
      formValid: form.reportValidity(),
    });
  }

  /**
   * Gets the 'previous' button for the wizard.
   */
  get previousButton(): JSX.Element | null {
    const currentStep = this.state.currentStep;
    // If the current step is not 1 (start) or 3 (end), then render the "previous" button
    if (currentStep === 2) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
          disabled={!this.state.formValid}>
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  /**
   * Gets the 'next' button for the wizard.
   */
  get nextButton(): JSX.Element | null {
    const currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
          disabled={!this.state.formValid}>
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  /**
   * Handles a change in specific prompt details.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event that was raised to indicate a change.
   */
  handlePromptDetailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let { id, value } = event.target;
    id = id.split('_')[1];
    const clone = Object.assign({}, this.state.prompt) as any;
    clone[id] = value;
    this.setState({
      currentStep: this.state.currentStep,
      promptId: this.state.promptId,
      prompt: clone,
    });
    this._validateForm();
  }

  /**
   * Handles a change in selection of the prompt.
   * @param {React.ChangeEvent<HTMLSelectElement>} event The event that was raised to indicate a change.
   */
  handlePromptSelectionChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    const value = event.target.value;
    const found = PromptStrategies.find((item) => item.id === value);
    if (found) {
      const clone = Object.assign({}, found);
      this.setState({
        currentStep: this.state.currentStep,
        promptId: found.id,
        prompt: clone,
      });
    } else {
      this.setState({
        currentStep: this.state.currentStep,
        promptId: undefined,
        prompt: undefined,
      });
    }
  }

  /**
   * Execute validation on form submission. Prevents submit - there's no server-side handling.
   * @param {React.FormEvent<HTMLFormElement>} event The event that was raised to indicate submission.
   */
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.reportValidity();
  }

  /**
   * Renders the wizard form container.
   * @return {JSX.Element|null} The container for the steps.
   */
  render(): JSX.Element | null {
    return (
      <form id="commandPromptHere" onSubmit={this.handleSubmit}>
        <React.Fragment>
          <h1>Command Prompt Here</h1>

          <Step1
            currentStep={this.state.currentStep}
            promptId={this.state.promptId}
            handleChange={this.handlePromptSelectionChange}
          />
          <Step2
            currentStep={this.state.currentStep}
            prompt={this.state.prompt}
            promptId={this.state.promptId}
            handleChange={this.handlePromptDetailChange}
          />
          <Step3
            currentStep={this.state.currentStep}
            prompt={this.state.prompt}
            promptId={this.state.promptId}
            startOver={this._resetForm}
          />
        </React.Fragment>
        {this.previousButton}
        {this.nextButton}
      </form>
    );
  }
}
