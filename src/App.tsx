import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

// TODO: Make this a multi-step wizard style form.
// https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
// https://www.typescriptlang.org/docs/handbook/jsx.html
// TODO: Setup GitHub Actions for build.

/**
 * Main application component.
 * @return {JSX.Element} Main application container.
 */
function App(): JSX.Element {
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
              <Button>button</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="text-muted">
        <Container>
          <p>Put the footer stuff here.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
