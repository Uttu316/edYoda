import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import Home from "./pages/home";

const MyApp = (props) => {
  return (
    <div>
      {/* <Counter /> */}
      <Home />
    </div>
  );
};

export default MyApp;
