import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../componets/header";
import UserDetails from "../componets/userDetails";
import { setLikeCount } from "../redux/actions/profileActions";

const UserPage = () => {
  const dipatch = useDispatch();
  useEffect(() => {
    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    dipatch(setLikeCount(likesArray.length));
  }, []);
  return (
    <div>
      <Header />
      <UserDetails />
    </div>
  );
};

export default UserPage;
