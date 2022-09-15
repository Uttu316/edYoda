import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1>
      Page is not available go to <Link to="/">Home</Link>
    </h1>
  );
};

export default NotFound;
