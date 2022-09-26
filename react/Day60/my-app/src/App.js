import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import ErrorBoundaryExample from "./components/errorBoundary/errorBoundary";
import Form from "./components/form";
import NewClassCounter from "./components/newClassCounter";
import ReduxList from "./components/reduxList";
import Home from "./pages/home";

const MyApp = (props) => {
  return (
    <div>
      <Form />
      {/* <Counter heading="My Counter" /> */}
      {/* <Home /> */}
      {/* <ErrorBoundaryExample /> */}
      {/* <NewClassCounter />
      <ReduxList /> */}
    </div>
  );
};

export default MyApp;
