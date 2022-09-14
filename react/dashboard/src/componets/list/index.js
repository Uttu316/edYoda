import Grid from "@mui/material/Grid";
import React from "react";
import Card from "./card";

const List = ({ users = [] }) => {
  return (
    <Grid container m={4}>
      {users.map((user, index) => (
        <Card data={user} />
      ))}
    </Grid>
  );
};

export default List;
