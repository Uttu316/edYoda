import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { Link } from "react-router-dom";

const checkUserIsLikeAlready = (id) => {
  const likesArray = JSON.parse(localStorage.getItem("likes"));
  const user = likesArray.find((i) => i.id === id);
  return user ? true : false;
};

//Task: useMemo

export default function ListCard({ data }) {
  const userIsLiked = checkUserIsLikeAlready(data?.id);
  const [isLike, setIsLike] = useState(userIsLiked);

  const onLikeProfile = () => {
    setIsLike(!isLike);
    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    if (!isLike) {
      const obj = { ...data };
      likesArray.push(obj);
      localStorage.setItem("likes", JSON.stringify(likesArray));
    } else {
      let newArray = likesArray.filter((i) => i.id !== data.id);
      localStorage.setItem("likes", JSON.stringify(newArray));
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 4 }}>
      <Link to={`/user/${data.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={data?.avatar}
          alt={data?.first_name || "random_image"}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.first_name + " " + data?.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.email}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeProfile}>
          <FavoriteIcon color={isLike ? "error" : "disabled"} />
        </IconButton>
        <IconButton>
          <BlockIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
