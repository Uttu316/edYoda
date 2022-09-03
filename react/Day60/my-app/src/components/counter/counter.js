import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  const onAdd = () => {
    setValue(value + 1);
  };
  const onSubstract = () => {
    setValue(value - 1);
  };
  return (
    <div className="counter-container">
      <button className="btn" onClick={onAdd}>
        Add
      </button>
      <h1 className="value">{value}</h1>
      <button className="btn" onClick={onSubstract}>
        Subtract
      </button>
    </div>
  );
};

export default Counter;
