import React from "react";
import "./App.css";
import Counter from "./components/counter/classCounter";
import ErrorBoundaryExample from "./components/errorBoundary/errorBoundary";
import Home from "./pages/home";

const MyApp = (props) => {
  return (
    <div>
      <Counter heading="My Counter" />
      {/* <Home /> */}
      {/* <ErrorBoundaryExample /> */}
    </div>
  );
};

export default MyApp;
