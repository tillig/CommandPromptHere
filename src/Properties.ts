import React from 'react';
import { PromptStrategy } from './PromptStrategies';

/**
 * Basic properties common to all steps.
 */
export interface Properties
{
  currentStep: number;
}

/**
 * Properties passed in to render Step 1.
 */
export interface Step1Properties extends Properties
{
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  prompt: PromptStrategy | undefined;
  promptId: string | undefined;
}
