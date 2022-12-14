import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "../features/counter/Counter";
import "../App.css";
import CharacterInformation from "../features/CharacterInformation/CharacterInformation";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharacterInformation></CharacterInformation>
        <header className="App-header">
          <br />
          <br />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </Provider>
  );
}

export default App;
