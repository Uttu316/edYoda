import Grid from "@mui/material/Grid";
import { Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../services";
import CardsLoader from "../loaders/cardsLoader";
import Card from "./card";
import { useLocation } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const List = (props) => {
  const [selectedUsers, setSelectedUsers] = useState({});
  const [users, setUsers] = useState(null); //
  const [isLoading, setIsLoading] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLoading(true);
      getUsers()
        .then((res) => {
          setUsers(res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (location.pathname === "/likes") {
      const likesArray = JSON.parse(localStorage.getItem("likes")) || [];
      setUsers({
        data: likesArray,
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    const key = Object.keys(selectedUsers);
    if (key.length) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }
  }, [selectedUsers]);

  const onDeleteBtn = () => {
    setShowAlert(true);
  };
  const handleClose = () => {
    setShowAlert(false);
  };
  const onDeleteItems = () => {
    const likesArray = JSON.parse(localStorage.getItem("like")) || [];
    const keys = Object.keys(selectedUsers);
    let newArray = likesArray.filter((i) => !keys.includes(i.id.toString()));
    console.log(newArray, keys);
    localStorage.setItem("likes", JSON.stringify(newArray));
    setShowAlert(false);
  };
  return (
    <Container>
      <Grid container m={4}>
        {!isLoading &&
          users &&
          users.data &&
          users.data.map((user, index) => (
            <Card
              key={user.id.toString() + index + "user"}
              data={user}
              setSelectedUsers={setSelectedUsers}
              selectedUsers={selectedUsers}
              {...props}
            />
          ))}

        {isLoading && <CardsLoader />}
      </Grid>
      {showDelete && (
        <Button
          onClick={onDeleteBtn}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      )}
      <Dialog
        open={showAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Alert!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete selected users?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={onDeleteItems} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default List;
