import React, { useEffect, useState } from "react";
import Header from "../componets/header";
import UserDetails from "../componets/userDetails";

const UserPage = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  useEffect(() => {
    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    setLikeCounter(likesArray.length);
  }, []);
  return (
    <div>
      <Header numberOfLikes={likeCounter} />
      <UserDetails setLikeCounter={setLikeCounter} />
    </div>
  );
};

export default UserPage;
