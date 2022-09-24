import React, { useEffect } from "react";
import Header from "../componets/header";
import List from "../componets/list";
import { useDispatch } from "react-redux";
import { setLikeCount } from "../redux/actions/profileActions";
import Slider from "../componets/slider";

const Home = (props) => {
  const dipatch = useDispatch();

  useEffect(() => {
    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    dipatch(setLikeCount(likesArray.length));
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <List />
    </div>
  );
};
export default Home;
