import React, { Component } from "react";
import "./counter.css";

class LifeCycleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    //	M3
    //	...
  }

  componentDidUpdate(prevProps, prevState) {
    //	U2                           // <-- ADD
    /* code to run after update happens via passing new `props`, `setState` or `forceUpdate` */

    console.log('IN "COMPONENT DID UPDATE"'); // <-- ADD
  }

  onAdd() {
    this.setState({ value: this.state.value + 1 });
  }

  onSubstract = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <button className="btn" onClick={this.onAdd}>
          Add
        </button>

        <h1 className="value">{this.state.value}</h1>
        <button className="btn" onClick={() => this.onSubstract()}>
          Subtract
        </button>
      </div>
    );
  }
}

export default LifeCycleCounter;
