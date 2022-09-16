import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../services";
import { getUserId } from "../utils/utils";
import { Box, Alert } from "@mui/material";
import { CardLoader } from "./loaders/cardsLoader";
import ListCard from "./list/card";

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const params = useParams();
  const { user_id } = params;

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    // const userID = getUserId();
    setIsloading(true);
    fetchUserDetails(user_id)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
        setError("Oops some error has occured!");
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  console.log(userData);
  return (
    <Box m={4}>
      {isLoading && <CardLoader width={240} height={320} />}

      {error !== "" && <Alert severity="error">{error}</Alert>}
      {!isLoading && !userData && !error && "No data is available"}
      {!isLoading && userData && <ListCard data={userData} />}
    </Box>
  );
};
export default UserDetails;
