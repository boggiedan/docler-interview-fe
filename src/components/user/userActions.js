import * as actionTypes from "./userActionTypes";

export const fetchAll = () => ({ type: actionTypes.FETCH_USERS });

export const fetchUserTodos = userId => ({
  type: actionTypes.FETCH_USER_TODOS,
  payload: {
    data: userId
  }
});
