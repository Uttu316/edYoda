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
    const { value, color } = this.props;
    return (
      <div className="counter-wrapper">
        <button
          className="btn"
          style={{
            background: color,
          }}
          onClick={this.onAddition}
        >
          Add+
        </button>
        {value}
        <button
          className="btn"
          style={{
            background: color,
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
    value: states.counter.value,
    color: states.counter.color,
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
