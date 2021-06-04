/**
 * Defines a single prompt strategy that can be selected for download.
 */
export interface PromptStrategy {
  /**
   * Uniquely identifies the type of command prompt. This value is used in the
   * INF file and the registry.
   */
  id: string;

  /**
   * The display text (including accelerator key) for the command prompt
   * within the context menu.
   */
  accelerator: string;

  /**
   * The full command line to start the command prompt.
   */
  commandLine: string;

  /**
   * A short display name of the prompt represented by this package.
   */
  name: string;
}

/**
 * The set of all implemented prompt strategies. The key in the object is the
 * unique ID for use in the INF file and registry.
 */
export const PromptStrategies = [
  {
    id: 'DosHere',
    accelerator: 'Command &amp;Prompt Here',
    commandLine: '%11%\\cmd.exe /k cd /d "%1"',
    name: 'Command Prompt',
  } as PromptStrategy,
  {
    id: 'PowerShellHere',
    accelerator: 'Po&amp;werShell Prompt Here',
    commandLine: '"%11%\\windowspowershell\\v1.0\\powershell.exe" -NoExit "cd \'% 1\'"',
    name: 'PowerShell Prompt',
  } as PromptStrategy,
];
