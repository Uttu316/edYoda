import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" />
      </div>
    </header>
  );
};

export default Header;
