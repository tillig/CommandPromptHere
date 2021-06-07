import React from 'react';
import { PromptStrategy } from './PromptStrategies';

/**
 * Basic properties common to all steps.
 */
export interface Properties
{
  currentStep: number;

}

export interface StepProperties extends Properties
{
  promptId: string | undefined;
}

/**
 * Properties passed in to render Step 1.
 */
export interface Step1Properties extends StepProperties
{
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}

/**
 * Properties passed in to render Step 2.
 */
export interface Step2Properties extends StepProperties {
  prompt: PromptStrategy | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Properties passed in to render Step 3.
 */
export interface Step3Properties extends StepProperties {
  prompt: PromptStrategy | undefined;
  startOver: React.MouseEventHandler<HTMLButtonElement>;
}
