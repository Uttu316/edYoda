import React from "react";
import "./App.css";
import Counter from "./components/counter/classCounter";
import Home from "./pages/home";

const MyApp = (props) => {
  return (
    <div>
      <Counter heading="My Counter" />
      {/* <Home /> */}
    </div>
  );
};

export default MyApp;
