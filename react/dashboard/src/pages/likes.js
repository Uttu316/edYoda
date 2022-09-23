import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../componets/header";
import List from "../componets/list";
import { setLikeCount } from "../redux/actions/profileActions";

const LikesPage = () => {
  const dipatch = useDispatch();

  useEffect(() => {
    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    dipatch(setLikeCount(likesArray.length));
  }, []);
  return (
    <div>
      <Header />
      <List />
    </div>
  );
};

export default LikesPage;
