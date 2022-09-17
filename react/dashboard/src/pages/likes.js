import React, { useEffect, useState } from "react";
import Header from "../componets/header";
import List from "../componets/list";

const LikesPage = () => {
  const [likeCounter, setLikeCounter] = useState(0);

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

export default LikesPage;
