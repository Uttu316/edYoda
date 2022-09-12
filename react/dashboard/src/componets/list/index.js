import Grid from "@mui/material/Grid";
import React from "react";
import Card from "./card";

const List = () => {
  return (
    <Grid container m={4}>
      <Card />

      <Card />

      <Card />
    </Grid>
  );
};

export default List;
