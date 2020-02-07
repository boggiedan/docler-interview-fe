import React from "react";
import classes from "./NavigationBar.styles.css";
import UserSelect from "./usersselect/UserSelect";

const NavigationBar = () => {
  return (
    <header className={classes.container}>
      <UserSelect />
    </header>
  );
};

export default NavigationBar;
