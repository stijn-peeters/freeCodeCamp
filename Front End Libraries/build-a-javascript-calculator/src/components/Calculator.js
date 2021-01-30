import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.onInputClicked = this.onInputClicked.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onInputClicked() {
    const text = this.props.padItem.keyTrigger;
    console.log(text);
    let outcome = [];
    if (text === "CE") {
      outcome = [0];
    } else if (text === "=") {
      let calcstr = this.props.formula.join("");
      // switch here
      console.log(calcstr);
    } else {
      this.props.formula[0] === 0 ? this.props.formula.shift() : void 0;
      outcome = [...this.props.formula, text];
      console.log(outcome);
    }

    this.props.updateDisplayText(outcome);
  }

  onKeyDown(event) {
    const root = ReactDOM.findDOMNode(this);

    // console.log(event.keyCode);
    if (event.keyCode === this.props.padItem.keyCode) {
      root.classList.add("active");
      this.onInputClicked();
    }
  }

  onKeyUp(event) {
    const root = ReactDOM.findDOMNode(this);

    if (event.keyCode === this.props.padItem.keyCode) {
      setTimeout(() => {
        root.classList.remove("active");
      }, 33);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  render() {
    const padItem = this.props.padItem;
    // console.log(this.state.formula);
    return (
      <div className="calc-pad" id={padItem.id} onClick={this.onInputClicked}>
        {padItem.keyTrigger}
      </div>
    );
  }
}
