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
    accelerator: 'Command &Prompt Here',
    commandLine: '%11%\\cmd.exe /k cd /d "%1"',
    name: 'Command Prompt',
  } as PromptStrategy,
  {
    id: 'PowerShellHere',
    accelerator: 'Po&werShell Prompt Here',
    commandLine: '"%11%\\windowspowershell\\v1.0\\powershell.exe" -NoExit "cd \'% 1\'"',
    name: 'PowerShell Prompt',
  } as PromptStrategy,
  // The /v:on allows for delayed environment variable processing using
  // !var! syntax instead of %var% syntax. Otherwise you can't expand
  // environment variables like %VS100COMNTOOLS% because %V has special meaning.
  {
    id: 'VS2003CmdHere',
    accelerator: 'VS 200&3 Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS71COMNTOOLS!vsvars32.bat"',
    name: 'VS 2003 Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2005CmdHere',
    accelerator: 'VS 200&5 Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS80COMNTOOLS!vsvars32.bat"',
    name: 'VS 2005 Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2008CmdHere',
    accelerator: 'VS 200&8 Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS90COMNTOOLS!vsvars32.bat"',
    name: 'VS 2008 Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2010X86CmdHere',
    accelerator: 'VS 2010 X&86 Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS100COMNTOOLS!..\\..\\VC\\vcvarsall.bat" x86',
    name: 'VS 2010 (x86) Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2010X64CmdHere',
    accelerator: 'VS 2010 X&64 Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS100COMNTOOLS!..\\..\\VC\\vcvarsall.bat" amd64',
    name: 'VS 2010 (x64) Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2012DevCmdHere',
    accelerator: 'VS 2012 &Dev Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS110COMNTOOLS!..\\..\\VC\\vcvarsall.bat" x86',
    name: 'VS 2012 Developer Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2012NativeX64Cmd',
    accelerator: 'VS 2012 X6&4 Command Prompt',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS110COMNTOOLS!..\\..\\VC\\vcvarsall.bat" amd64',
    name: 'VS 2012 Native x64 Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2013DevCmdHere',
    accelerator: 'VS 2013 &Dev Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS120COMNTOOLS!VsDevCmd.bat"',
    name: 'VS 2013 Developer Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2015DevCmdHere',
    accelerator: 'VS 2015 &Dev Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!VS140COMNTOOLS!VsDevCmd.bat"',
    name: 'VS 2015 Developer Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2017CommunityDevCmdHere',
    accelerator: 'VS 201&7 Community Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!ProgramFiles(x86)!\\Microsoft Visual Studio\\2017\\Community\\Common7\\Tools\\VsDevCmd.bat"',
    name: 'VS 2017 Community Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2017EnterpriseDevCmdHere',
    accelerator: 'VS 201&7 Enterprise Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!ProgramFiles(x86)!\\Microsoft Visual Studio\\2017\\Enterprise\\Common7\\Tools\\VsDevCmd.bat"',
    name: 'VS 2017 Enterprise Command Prompt',
  } as PromptStrategy,
  {
    id: 'VS2017ProfessionalDevCmdHere',
    accelerator: 'VS 201&7 Professional Prompt Here',
    commandLine: '%11%\\cmd.exe /v:on /k cd /d "%1" && "!ProgramFiles(x86)!\\Microsoft Visual Studio\\2017\\Professional\\Common7\\Tools\\VsDevCmd.bat"',
    name: 'VS 2017 Professional Command Prompt',
  } as PromptStrategy,
];
