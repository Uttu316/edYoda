import React, { useState } from "react";
import Home from "./pages/home";
import UserPage from "./pages/user";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./componets/notFound";
import LikesPage from "./pages/likes";
import Login from "./pages/login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/likes" element={<LikesPage />} />
        <Route path="user/:user_id" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
