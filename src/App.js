import React from "react";
import { Provider } from "react-redux";
import styles from "./App.css";
import store from "./store/store";
import NavigationBar from "./components/navigationbar/NavigationBar";
import TodoList from "./components/todolist/TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationBar />
      <TodoList />
    </Provider>
  );
};

export default App;
