import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MasterForm } from './MasterForm';
import './App.css';

// Multi-step wizard style form mostly based on this:
// https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
// https://www.typescriptlang.org/docs/handbook/jsx.html
// TODO: Setup GitHub Actions for build.

/**
 * Main application component.
 * @return {JSX.Element} Main application container.
 */
export class App extends React.Component {
  /**
   * Render the form.
   * @param {Properties} props The properties for the wizard.
   * @return {React.ReactNode} The node to render.
   */
  render(): JSX.Element | null {
    return (
      <div>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Command Prompt Here</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="https://github.com/tillig/CommandPromptHere">Source on GitHub</Nav.Link>
                <Nav.Link href="https://www.paraesthesia.com">My Blog</Nav.Link>
                <Nav.Link href="http://app.paraesthesia.com">Other Apps</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <main role="main">
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <MasterForm currentStep={1} />
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="text-muted">
          <Container>
            <div className="social-button">
              <div className="fb-like" data-href="https://www.paraesthesia.com/CommandPromptHere/" data-send="true" data-width="450" data-show-faces="true"></div>
            </div>

            <p className="disclaimer">Wizard created by <a href="https://www.paraesthesia.com">Travis Illig</a>. If you like it (or find any problems), <a href="https://www.paraesthesia.com">head over to his blog and drop him a line</a>.</p>
            <p className="disclaimer"><strong>DISCLAIMER:</strong> &quot;Command Prompt Here&quot; installers set registry values. While every effort has been made to test things, the truth is I don&apos;t have the ability to verify every installer works with every combination of OS, bitness, and tool. <strong>Using any generated installer from this tool is at your own risk.</strong> The installers here are free with no warranty expressed or implied.</p>

            <ins className="adsbygoogle"
              style={{ display: 'inline-block', width: '468px', height: '60px' }}
              data-ad-client="ca-pub-9058541546510381"
              data-ad-slot="7960782323"></ins>
          </Container>
        </footer>
      </div>
    );
  }
}
