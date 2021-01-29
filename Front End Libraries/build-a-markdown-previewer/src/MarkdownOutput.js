import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class MarkdownOutput extends Component {
  render() {
    return (
      <div className="MarkdownOutput" id="preview">
        <ReactMarkdown source={this.props.source} />
      </div>
    );
  }
}

export default MarkdownOutput;
