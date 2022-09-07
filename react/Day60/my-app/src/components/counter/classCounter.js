import React, { Component } from "react";
import "./counter.css";
import LifeCycleCounter from "./lifecycleCounter";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
    };
  }

  toggleThumb = () => {
    this.setState({ isLike: !this.state.isLike });
  };

  render() {
    const { heading } = this.props;
    return (
      <div>
        <h1>{heading}</h1>
        {this.state.isLike && <LifeCycleCounter initialValue={2} />}
        <div className="counter-container">
          <button className="btn" onClick={() => this.toggleThumb()}>
            {this.state.isLike ? "Like" : "Dislike"}
          </button>
          <h1 className="value">{this.state.isLike ? "👍🏻" : "👎"}</h1>
        </div>
      </div>
    );
  }
}

export default Counter;
