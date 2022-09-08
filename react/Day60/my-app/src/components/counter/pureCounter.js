import React, { Component, PureComponent } from "react";

import "./counter.css";

class PureCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    this.setState({ value: this.state.value + 1 });
  }

  onSubstract = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    console.log("I am inside");
    return (
      <div className="counter-container">
        <button className="btn" onClick={this.onAdd}>
          Add
        </button>

        <h1 className="value">
          {this.props.user.name} {this.state.value}
        </h1>
        <button className="btn" onClick={() => this.onSubstract()}>
          Subtract
        </button>
      </div>
    );
  }
}

export default PureCounter;
