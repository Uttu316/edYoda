import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../services";
import { getUserId } from "../utils/utils";

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const params = useParams();
  const { user_id } = params;
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    // const userID = getUserId();

    fetchUserDetails(user_id)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>User Details</div>;
};
export default UserDetails;
