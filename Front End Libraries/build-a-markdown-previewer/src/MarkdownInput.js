import React, { Component } from "react";

class MarkdownInput extends Component {
  handleChange = (evt) => {
    this.props.handleChange(evt);
  };

  render() {
    return (
      <textarea
        id="editor"
        onChange={this.handleChange}
        name="markdownInput"
        className="MarkdownInput"
        value={this.props.init}
      ></textarea>
    );
  }
}

export default MarkdownInput;
