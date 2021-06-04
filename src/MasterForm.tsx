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
      promptId: undefined,
      prompt: undefined,
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.handlePromptSelectionChange = this.handlePromptSelectionChange.bind(this);
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
   * Gets the 'previous' button for the wizard.
   */
  get previousButton(): JSX.Element | null {
    const currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}>
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
          onClick={this._next}>
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  /**
 * Handles a change in selection of the prompt.
 * @param {any} event The event that was raised to indicate a change.
 */
  handlePromptSelectionChange(event: any): void {
    const value = event.target.value as string;
    const found = Object.entries(PromptStrategies).find((pair) => pair[0] === value);
    if (found) {
      this.setState({
        currentStep: this.state.currentStep,
        promptId: found[0],
        prompt: found[1],
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
   * Handle final form submission.
   * @param {any} event The event that was raised to indicate submission.
   */
  handleSubmit(event: any): void {
    event.preventDefault();
    alert('Submitted!');
    // TODO: Figure out how to declare state so we can read from it. Seems we can set it earlier in the constructor.
    /*
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n
    Email: ${email} \n
    Username: ${username} \n
    Password: ${password}`);
    */
  }

  /**
   * Renders the wizard form container.
   * @return {JSX.Element|null} The container for the steps.
   */
  render(): JSX.Element | null {
    return (
      <form onSubmit={this.handleSubmit}>
        <React.Fragment>
          <h1>Command Prompt Here</h1>

          <Step1
            currentStep={this.state.currentStep}
            prompt={this.state.prompt}
            promptId={this.state.promptId}
            handleChange={this.handlePromptSelectionChange}
          />
          <Step2
            currentStep={this.state.currentStep}
          />
          <Step3
            currentStep={this.state.currentStep}
          />
        </React.Fragment>
        {this.previousButton}
        {this.nextButton}
      </form>
    );
  }
}
