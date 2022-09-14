import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";

export default function ListCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 4 }}>
      <CardMedia
        component="img"
        height="140"
        image={data?.avatar}
        alt={data?.first_name || "random_image"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.first_name + " " + data?.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.email}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <BlockIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
