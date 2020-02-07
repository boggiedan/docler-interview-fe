import React from "react";
import PropTypes from "prop-types";
import classes from "./Todo.styles.css";

const Todo = ({ id, title }) => {
  return (
    <div className={classes.container}>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,

  title: PropTypes.string.isRequired
};

export default Todo;
