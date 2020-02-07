import React, { useState, useEffect, Fragment } from "react";
import useFetchData from "../common/usefetchdata/useFetchData";
import classes from "./TodoList.styles.css";
import Todo from "./todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [isFetching, errorMessage, items] = useFetchData("linkedEntities");
  const [beginInterval, setBeginInterval] = useState(0);
  const [endInterval, setEndInterval] = useState(10);
  const isUserFetch = useSelector(state => state.user.isFetching);

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  });

  const wheelHandler = event => {
    if (event.deltaY > 0) {
      const newEnInterval = endInterval + 10;

      if (newEnInterval <= items.length) {
        setBeginInterval(newEnInterval - 10);
        setEndInterval(newEnInterval);
      }
    }

    if (event.deltaY < 0) {
      const newBeginInterval = beginInterval - 10;

      if (beginInterval > 0) {
        setBeginInterval(newBeginInterval);
        setEndInterval(newBeginInterval + 10);
      }
    }
  };

  const shouldRenderTodos = () => {
    return !isFetching && !errorMessage && todos.length > 0;
  };

  const isEmpty = () => {
    return !isFetching && !isUserFetch && !errorMessage && todos.length === 0;
  };

  const renderTodo = todo => (
    <Todo key={todo.id} id={todo.id} title={todo.title} />
  );

  const todos = items.map(todo => ({ id: todo.id, title: todo.title }));

  return (
    <section className={classes.container}>
      {isFetching && !errorMessage && <p>Loading...</p>}
      {!!errorMessage && <p>Error: {errorMessage}</p>}
      {isEmpty() && <p>No items found</p>}
      {shouldRenderTodos() && (
        <Fragment>
          {todos.slice(beginInterval, endInterval).map(renderTodo)}
          <div>
            from: {beginInterval} to: {endInterval}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default TodoList;
