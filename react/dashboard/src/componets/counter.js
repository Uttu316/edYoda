import React, { useState, useEffect } from "react";
import { getUserInfo } from "../services";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [sumOfTwo, setSumOFtwo] = useState(0);
  const [sumOfThree, setSumOFthree] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, [count]);

  const getUserDetails = () => {
    getUserInfo()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>
        You clicked {count},{sumOfTwo},{sumOfThree} times
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
