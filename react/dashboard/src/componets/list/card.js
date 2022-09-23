import React, { useCallback, useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLikeCount } from "../../redux/actions/profileActions";

const checkUserIsLikeAlready = (id) => {
  // console.log("Hello", id);
  const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
  const user = likesArray.find((i) => i.id === id);
  return user ? true : false;
};

export default function ListCard({
  data,
  selectedUsers = {},
  setSelectedUsers,
}) {
  const location = useLocation();

  const dispatch = useDispatch();
  const { likeCount } = useSelector((state) => state.profile);

  const userIsLiked = useMemo(() => {
    return checkUserIsLikeAlready(data?.id);
  }, [data?.id]);

  const [isLike, setIsLike] = useState(userIsLiked);

  const onLikeProfile = () => {
    setIsLike(!isLike);

    const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    if (!isLike) {
      const obj = { ...data };
      likesArray.push(obj);
      localStorage.setItem("likes", JSON.stringify(likesArray));

      dispatch(setLikeCount(likeCount + 1));
    } else {
      let newArray = likesArray.filter((i) => i.id !== data.id);
      localStorage.setItem("likes", JSON.stringify(newArray));

      if (likeCount >= 0) {
        dispatch(setLikeCount(likeCount - 1));
      } else {
        dispatch(setLikeCount(0));
      }
    }
  };

  const onMultiSelect = () => {
    if (selectedUsers[data?.id]) {
      let newUsers = { ...selectedUsers };
      delete newUsers[data?.id];
      setSelectedUsers(newUsers);
    } else {
      setSelectedUsers({ ...selectedUsers, [data?.id]: true });
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
        {location.pathname === "/likes" && (
          <IconButton onClick={onMultiSelect}>
            {selectedUsers[data?.id] ? <CheckCircleIcon /> : <BlockIcon />}
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
