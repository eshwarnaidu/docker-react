import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Don't Edit <code>src/App.js</code> and don't save to reload.
        </p>
        <p>
          Kiran is a genius and he loves APIs'. He can also play guitar and he
          is a part-time DJ. If not a programmer he would have been an actor.
          His acting skills are on full display when he is coding.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't Learn React.
        </a>
      </header>
    </div>
  );
}

export default App;
