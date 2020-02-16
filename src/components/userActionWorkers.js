import * as service from "./userService";
import * as actionTypes from "./userActionTypes";
import { put, call } from "redux-saga/effects";
import { request, success, failure } from "./common/commonUserActions";

const isValidStatus = status => status >= 200 && status < 300;

export function* fetchAllWorker() {
  yield put(request(actionTypes.GET_USERS_REQUEST));

  try {
    const response = yield call(service.fetchAll);

    if (!isValidStatus(response.status))
      throw new Error("Users could not be retrieved");

    const users = yield response.json();

    yield put(success(actionTypes.GET_USERS_SUCCESS, users));

    if (users.length > 0) {
      yield fetchUserTodos({
        type: actionTypes.FETCH_USER_TODOS,
        payload: {
          data: users[0].id
        }
      });
    }
  } catch (e) {
    yield put(failure(actionTypes.GET_USERS_FAILURE, e.message));
  }
}

export function* fetchUserTodos(action) {
  yield put(request(actionTypes.GET_USER_TODOS_REQUEST));

  try {
    const response = yield call(service.fetchUserTodos, action.payload.data);

    if (!isValidStatus(response.status))
      throw new Error("User's TODOs could not be retrieved");

    const todos = yield response.json();

    yield put(success(actionTypes.GET_USER_TODOS_SUCCESS, todos));
  } catch (e) {
    yield put(failure(actionTypes.GET_USER_TODOS_FAILURE, e.message));
  }
}
