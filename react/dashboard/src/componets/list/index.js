import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../services";
import CardsLoader from "../loaders/cardsLoader";
import Card from "./card";

const List = () => {
  const [users, setUsers] = useState(null); //
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <Grid container m={4}>
        {!isLoading &&
          users &&
          users.data &&
          users.data.map((user, index) => (
            <Card key={user.id + index + "user"} data={user} />
          ))}

        {isLoading && <CardsLoader />}
      </Grid>
    </Container>
  );
};

export default List;
