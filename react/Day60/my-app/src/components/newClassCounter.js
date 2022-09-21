import React, { Component } from "react";
import { onAdd, onMinus, changeColor } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class NewClassCounter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onChangeColor("red");
  }
  componentDidUpdate(prevProps) {
    if (this.props.value > 4) {
      this.props.onChangeColor("blue");
    } else {
      this.props.onChangeColor("salmon");
    }
  }

  onAddition = () => {
    const newValue = this.props.value + 1;
    this.props.onAdd(newValue);
  };
  onSubstraction = () => {
    const newValue = this.props.value - 1;
    this.props.onMinus(newValue);
  };
  render() {
    return (
      <div className="counter-wrapper">
        <button
          className="btn"
          style={{
            background: this.props.color,
          }}
          onClick={this.onAddition}
        >
          Add+
        </button>
        {this.props.value}
        <button
          className="btn"
          style={{
            background: this.props.color,
          }}
          onClick={this.onSubstraction}
        >
          Minus-
        </button>
      </div>
    );
  }
}

const mapStateToProps = (states) => {
  return {
    value: states.value,
    color: states.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch(onAdd(value)),
    onMinus: (value) => dispatch(onMinus(value)),
    onChangeColor: (color) => dispatch(changeColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewClassCounter);
