import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import ErrorBoundaryExample from "./components/errorBoundary/errorBoundary";
import Form from "./components/form";
import Home from "./pages/home";

const MyApp = (props) => {
  return (
    <div>
      <Form />
      {/* <Counter heading="My Counter" /> */}
      {/* <Home /> */}
      {/* <ErrorBoundaryExample /> */}
    </div>
  );
};

export default MyApp;
