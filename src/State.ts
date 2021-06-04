import { PromptStrategy } from './PromptStrategies';

/**
 * State that persists across all wizard steps.
 */
export interface State {
  currentStep: number;
  prompt: PromptStrategy | undefined;
  promptId: string | undefined;
}
