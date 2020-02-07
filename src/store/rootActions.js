import { all, fork } from "redux-saga/effects";
import {
  watchFetchAllUsers,
  watchFetchUserTodos
} from "../components/user/userActionWatchers";

function* rootActions() {
  yield all([fork(watchFetchAllUsers), fork(watchFetchUserTodos)]);
}

export default rootActions;
