import React from 'react';
import logo from './logo.svg';
import './App.css';

// TODO: Make this a multi-step wizard style form.
// https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
// TODO: Get react-bootstrap working.
// https://react-bootstrap.github.io/
// https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md
// https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-ts

/**
 * Main application component.
 * @return {JSX.Element} Main application container.
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;
