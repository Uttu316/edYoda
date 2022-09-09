import React, { useState, Component } from "react";
import "./counter.css";

const Counter = (props) => {
  const [value, setValue] = useState(0);
  const onAdd = () => {
    setValue(value + 1);
  };
  const onSubstract = () => {
    setValue(value - 1);
  };

  return (
    <div className="counter-container">
      <div>
        <Button label={"Add"} onClick={onAdd} />
        <h1 className="value">{value}</h1>
        <Button label={"Subtract"} onClick={onSubstract} />
      </div>
    </div>
  );
};

const Button = (btnprops) => {
  const { onClick, label } = btnprops;
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};
export default Counter;
