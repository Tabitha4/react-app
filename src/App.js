import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const array = ["React ~ ", "Javascript ~ ", "ES6 ~ ", "Redux "];

    var arrayToRender = [];
    array.forEach(function(array) {
      arrayToRender.push(array);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="myArray">{arrayToRender}</p>
          <p style={{ fontSize: "80px" }} className="text-large">
            Hiya!
          </p>
          <p style={{ fontSize: "40px" }} className="learnParagraph">
            This is me trying to learn some React
          </p>
          <p className="youLearn">
            If you want to learn it also, click{" "}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here
            </a>
          </p>
          <button
            onClick={() => {
              console.log("Hey, this was clicked!");
            }}
          >
            Press ME to test to the console
          </button>
        </header>
      </div>
    );
  }
}

export default App;
