import React, { useEffect, useState } from "react";
import Header from "../componets/header";
import List from "../componets/list";
import { useSelector } from "react-redux";

const Home = () => {
  const [likeCounter, setLikeCounter] = useState(0);

  const { token } = useSelector((state) => state.profile);

  useEffect(() => {
    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    setLikeCounter(likesArray.length);
  }, []);
  return (
    <div>
      <Header numberOfLikes={likeCounter} />
      <List setLikeCounter={setLikeCounter} />
    </div>
  );
};
export default Home;
