import * as service from "./userService";
import * as actionTypes from "./userActionTypes";
import { put, takeLatest, call } from "redux-saga/effects";
import { request, success, failure } from "../common/commonUserActions";

function* fetchAllWorker() {
  yield put(request(actionTypes.GET_USERS_REQUEST));

  try {
    const response = yield call(service.fetchAll);

    yield put(success(actionTypes.GET_USERS_SUCCESS, response));
  } catch (e) {
    yield put(failure(actionTypes.GET_USERS_FAILURE, e.message));
  }
}

export function* watchFetchAllUsers() {
  yield takeLatest(actionTypes.FETCH_USERS, fetchAllWorker);
}

function* fetchUserTodos(action) {
  yield put(request(actionTypes.GET_USER_TODOS_REQUEST));

  try {
    const response = yield call(service.fetchUserTodos, action.payload.data);

    yield put(success(actionTypes.GET_USER_TODOS_SUCCESS, response));
  } catch (e) {
    yield put(failure(actionTypes.GET_USER_TODOS_FAILURE, e.message));
  }
}

export function* watchFetchUserTodos() {
  yield takeLatest(actionTypes.FETCH_USER_TODOS, fetchUserTodos);
}
