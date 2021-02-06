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
    let text = this.props.padItem.keyTrigger;
    let outcome = [];
    const last = this.props.formula.join("").split(/[^0-9.]/g);
    switch (text) {
      case "CE":
        outcome = [0];
        break;
      case "=":
        let calcstr = this.props.formula.join("");
        // eslint-disable-next-line no-eval
        outcome = [Math.round(eval(calcstr).toFixed(4) * 10000) / 10000];
        break;
      case ".":
        last[last.length - 1].includes(".")
          ? (text = "")
          : this.props.formula[this.props.formula.length - 1] === "."
          ? this.props.formula.pop()
          : void 0;
        outcome = [...this.props.formula, text];
        break;
      case "0":
        this.props.formula === []
          ? (text = "0")
          : last[0] !== "0" && last[0] !== ""
          ? (text = 0)
          : (text = "");
        outcome = [...this.props.formula, text];
        break;
      default:
        this.props.formula[0] === 0 ? this.props.formula.shift() : void 0;

        /[^0-9.]/g.test(text)
          ? /[^0-9.]/g.test(this.props.formula[this.props.formula.length - 1])
            ? text === "-"
              ? void 0
              : /[^0-9.]/g.test(
                  this.props.formula[this.props.formula.length - 1]
                ) &&
                /[^0-9.]/g.test(
                  this.props.formula[this.props.formula.length - 2]
                )
              ? this.props.formula.splice(this.props.formula.length - 2, 2)
              : this.props.formula.pop()
            : void 0
          : void 0;

        outcome = [...this.props.formula, text];
        break;
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
