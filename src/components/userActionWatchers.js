import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "./userActionTypes";
import { fetchAllWorker, fetchUserTodos } from "./userActionWorkers";

export function* watchFetchAllUsers() {
  yield takeLatest(actionTypes.FETCH_USERS, fetchAllWorker);
}

export function* watchFetchUserTodos() {
  yield takeLatest(actionTypes.FETCH_USER_TODOS, fetchUserTodos);
}
