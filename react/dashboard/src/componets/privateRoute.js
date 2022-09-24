import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const PrivateRoute = ({ element }) => {
  let isLoggedIn = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" replace={true} />;
};

export const ProtectedRoute = ({ element }) => {
  let isLoggedIn = useAuth();
  const { pathname } = useLocation();
  return pathname === "/login" && isLoggedIn ? (
    <Navigate to="/" replace={true} />
  ) : (
    element
  );
};

export default PrivateRoute;
