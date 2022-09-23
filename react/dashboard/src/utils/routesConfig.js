import React from "react";
import PrivateRoute, { ProtectedRoute } from "../componets/privateRoute";
import Home from "../pages/home";
import LikesPage from "../pages/likes";
import Login from "../pages/login";
import UserPage from "../pages/user";

export const ROUTES = [
  {
    element: <PrivateRoute element={<Home />} />,
    path: "/",
  },
  {
    element: <PrivateRoute element={<UserPage />} />,
    path: "user/:user_id",
  },
  {
    element: <PrivateRoute element={<LikesPage />} />,
    path: "/likes",
  },
  {
    element: <ProtectedRoute element={<Login />} />,
    path: "/login",
  },
];
