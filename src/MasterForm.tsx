import { Properties } from './Properties';
import { State } from './State';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import React from 'react';

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
    // TODO: Set the initial input values
    this.state = {
      currentStep: 1,
    };

    // this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
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
   * Handle data change to update state.
   * @param {any} event The event that was raised to indicate a change.
   */
  handleChange(event: any): void {
    // TODO: Set state when things change
    console.log(event);
    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value,
    // });
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
            // handleChange={this.handleChange}
            // email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            // handleChange={this.handleChange}
            // username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            // handleChange={this.handleChange}
            // password={this.state.password}
          />
        </React.Fragment>
        {this.previousButton}
        {this.nextButton}
      </form>
    );
  }
}
