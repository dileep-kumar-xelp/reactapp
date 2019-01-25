import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const commitRef = process.env.APP_COMMIT_REF || "N/A";
const buildDate = process.env.APP_BUILD_DATE || new Date().toISOString();
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            `We're at commit ${commitRef} which was built at ${buildDate}`
          </a>
        </header>
      </div>
    );
  }
}

export default App;
