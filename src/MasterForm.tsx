import { Properties } from './Properties';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import React from 'react';

/**
 * Main form that orchestrates the wizard.
 */
export class MasterForm extends React.Component<Properties, any> {
  /**
   * Constructor.
   * @param {Properties} props The properties for the workflow.
   */
  constructor(props: Properties) {
    super(props);
    // TODO: Set the initial input values
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this._next = this._next.bind(this);
    // this._prev = this._prev.bind(this);
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
   * Handle data change to update state.
   * @param {any} event The event that was raised to indicate a change.
   */
  handleChange(event: any): void {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
      <React.Fragment>
        <h1>A Wizard Form!</h1>

      Step {this.state.currentStep}

        <form onSubmit={this.handleSubmit}>

          // Render the form steps and pass in the required props
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // password={this.state.password}
          />
        </form>
      </React.Fragment>
    );
  }
}
