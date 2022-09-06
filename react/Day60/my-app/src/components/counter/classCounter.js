import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isLike: false,
    };
  }
  onAdd = () => {
    this.setState({ value: this.state.value + 1 });
  };
  onSubstract = () => {
    this.setState({ value: this.state.value - 1 });
  };
  toggleThumb = () => {
    this.setState({ isLike: !this.state.isLike });
  };

  render() {
    const { heading } = this.props;
    return (
      <div>
        <h1>{heading}</h1>
        {this.state.isLike && (
          <div className="counter-container">
            <button className="btn" onClick={this.onAdd}>
              Add
            </button>

            <h1 className="value">{this.state.value}</h1>
            <button className="btn" onClick={() => this.onSubstract()}>
              Subtract
            </button>
          </div>
        )}
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
