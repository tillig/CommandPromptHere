import { State } from './State';
import { Step3Properties } from './Properties';
import React from 'react';

/**
 * Step 3: Download.
 */
export class Step3 extends React.Component<Step3Properties, State> {
  /**
   * Constructor.
   * @param {Properties} props The properties for the workflow.
   */
  constructor(props: Step3Properties) {
    super(props);
    this.downloadInf = this.downloadInf.bind(this);
  }

  /**
   * Generates the .inf file and starts the download.
   */
  downloadInf(): void {
    const cmdLine = this.props.prompt?.commandLine.replace(/"/g, '""');
    const infContent = `;
; ${this.props.prompt?.name} PowerToy
;
; Generated by Command Prompt Here Generator - Travis Illig
; https://www.paraesthesia.com
;
; Template adapted from original "CMD Prompt Here" PowerToy
; and Visual Studio prompt adaptations from Scott Hanselman
; https://www.computerzen.com
;

[version]
signature="$CHICAGO$"

[DefaultInstall]
CopyFiles = CurrentInstaller.Files.Inf
AddReg    = CurrentInstaller.Reg.Add

[DefaultUnInstall]
DelFiles  = CurrentInstaller.Files.Inf
DelReg    = CurrentInstaller.Reg.Add,CurrentInstaller.Reg.Remove

[SourceDisksNames]
1 = "${this.props.prompt?.name} Here"

[SourceDisksFiles]
${this.props.prompt?.id}.inf = 1

[DestinationDirs]
CurrentInstaller.Files.Inf = 17

[CurrentInstaller.Files.Inf]
${this.props.prompt?.id}.inf

[CurrentInstaller.Reg.Add]
HKLM,%UDHERE%
HKLM,%UDHERE%,DisplayName,,"%CommandPromptName%"
HKLM,%UDHERE%,UninstallString,,"rundll32.exe syssetup.dll,SetupInfObjectInstallAction DefaultUninstall 132 %17%\\${this.props.prompt?.id}.inf"
HKCR,Directory\\Shell\\${this.props.prompt?.id},,,"%CommandPromptAccel%"
HKCR,Directory\\Shell\\${this.props.prompt?.id}\\command,,,"${cmdLine}"
HKCR,Drive\\Shell\\${this.props.prompt?.id},,,"%CommandPromptAccel%"
HKCR,Drive\\Shell\\${this.props.prompt?.id}\\command,,,"${cmdLine}"

[CurrentInstaller.Reg.Remove]
HKLM,%UDHERE%
HKCR,Directory\\Shell\\${this.props.prompt?.id}
HKCR,Drive\\Shell\\${this.props.prompt?.id}

[Strings]
CommandPromptName="${this.props.prompt?.name} Here PowerToy"
CommandPromptAccel="${this.props.prompt?.accelerator}"
UDHERE="Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\${this.props.prompt?.id}"
`;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(infContent));
    element.setAttribute('download', `${this.props.prompt?.id}.inf`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  /**
   * Render the form.
   * @param {Properties} props The properties for the wizard.
   * @return {JSX.Element} Form fragment to collect the data.
   */
  render(): JSX.Element | null {
    if (this.props.currentStep !== 3) {
      return null;
    }
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
              onClick={this.downloadInf}
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
