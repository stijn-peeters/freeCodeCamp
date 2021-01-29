import React, { Component } from "react";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import "./App.css";

const inlineCode = "`with code`";
const CodeBlock = "```";

const requirements = `
# you cunt 
## absolute dickweed
[I'm an inline-style        link](https://www.google.com)
this some bs
fuck man
1. First ordered list item 
2. Another item 
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number 
⋅⋅1. Ordered sub-list
4.  And another item.

${inlineCode}

> Blockquotes are very handy in email to emulate reply text.

${CodeBlock}

javascript and a block
${CodeBlock}
> This line is part of the same quote. 

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

**asterisks** or __underscores__
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownInput: "",
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  componentDidMount() {
    this.setState({ markdownInput: requirements });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Previewer</h1>
        </header>
        <div className="markdown-container">
          <MarkdownInput
            init={this.state.markdownInput}
            handleChange={this.handleChange}
          />
          <MarkdownOutput source={this.state.markdownInput} />
        </div>
      </div>
    );
  }
}

export default App;
