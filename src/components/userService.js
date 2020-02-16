const BASE_PATH = "https://jsonplaceholder.typicode.com";
const USERS_PATH = "users";
const TODOS_PATH = "todos";

const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};

export const fetchAll = () => {
  return fetch(`${BASE_PATH}/${USERS_PATH}`, getOptions);
};

export const fetchUserTodos = userId => {
  return fetch(`${BASE_PATH}/${TODOS_PATH}?userId=${userId}`);
};
