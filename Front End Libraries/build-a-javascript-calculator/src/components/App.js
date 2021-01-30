import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.css";

const input = [
  {
    keyCode: 48,
    keyTrigger: "0",
    id: "zero",
  },
  {
    keyCode: 49,
    keyTrigger: "1",
    id: "one",
  },
  {
    keyCode: 50,
    keyTrigger: "2",
    id: "two",
  },
  {
    keyCode: 51,
    keyTrigger: "3",
    id: "three",
  },
  {
    keyCode: 52,
    keyTrigger: "4",
    id: "four",
  },
  {
    keyCode: 53,
    keyTrigger: "5",
    id: "five",
  },
  {
    keyCode: 54,
    keyTrigger: "6",
    id: "six",
  },
  {
    keyCode: 55,
    keyTrigger: "7",
    id: "seven",
  },
  {
    keyCode: 56,
    keyTrigger: "8",
    id: "eight",
  },
  {
    keyCode: 57,
    keyTrigger: "9",
    id: "nine",
  },
  {
    keyCode: 107,
    keyTrigger: "+",
    id: "add",
  },
  {
    keyCode: 173,
    keyTrigger: "-",
    id: "subtract",
  },
  {
    keyCode: 106,
    keyTrigger: "*",
    id: "multiply",
  },
  {
    keyCode: 111,
    keyTrigger: "/",
    id: "divide",
  },
  {
    keyCode: 61,
    keyTrigger: "=",
    id: "equals",
  },
  {
    keyCode: 190,
    keyTrigger: ".",
    id: "decimal",
  },
  {
    keyCode: 46,
    keyTrigger: "CE",
    id: "clear",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 0,
      formula: [],
    };

    this.updateDisplayText = this.updateDisplayText.bind(this);
  }

  updateDisplayText(text) {
    this.setState({
      displayText: text,
      formula: [...text],
    });
  }

  render() {
    return (
      <div className="calc" id="js-calculator">
        <div className="calc-display" id="display">
          <h1>{this.state.displayText}</h1>
        </div>

        <div className="calc-pads">
          {input.map((item, idx) => {
            return (
              <Calculator
                formula={this.state.formula}
                key={idx}
                padItem={item}
                updateDisplayText={this.updateDisplayText}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
