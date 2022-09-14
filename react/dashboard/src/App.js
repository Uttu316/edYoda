import { useEffect, useState } from "react";
import "./App.css";
import Header from "./componets/header";
import List from "./componets/list";
import ImagesList from "./componets/images";
import ResponsiveDrawer from "./componets/drawer";
import { getUserInfo } from "./services";
import { Snackbar } from "@mui/material";

import ListCard from "./componets/list/card";

function App() {
  const [showError, setShowError] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    getUserInfo()
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        setShowError(err);
      });
  };

  return (
    <div className="App">
      <Header />
      {/* <List /> */}
      <ListCard data={userData} />
      {/* <ImagesList /> */}
      {/* <ResponsiveDrawer /> */}
      {Boolean(showError) && (
        <Snackbar
          open={Boolean(showError)}
          autoHideDuration={2000}
          message={showError}
        />
      )}
    </div>
  );
}

export default App;
