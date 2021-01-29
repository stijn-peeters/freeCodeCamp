import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;
    const LINK = `https://twitter.com/intent/tweet?text=${this.props.quote} -${this.props.author}`;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="text">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <a
          style={{ backgroundColor: randomColor }}
          href={LINK}
          target="_blank"
          rel="noreferrer"
          id="tweet-quote"
        >
          Tweet quote
        </a>
        <button
          style={{ backgroundColor: randomColor, font: " bold 11px Arial" }}
          id="new-quote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;
