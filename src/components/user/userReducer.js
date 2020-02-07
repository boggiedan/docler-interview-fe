import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_TODOS_REQUEST,
  GET_USER_TODOS_SUCCESS,
  GET_USER_TODOS_FAILURE
} from "./userActionTypes";
import * as helper from "../common/reducerHelper";

const initialState = {
  isFetching: false,
  errorMessage: "",
  items: [],

  linkedEntities: {
    isFetching: false,
    errorMessage: "",
    items: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return helper.contructRequest(state);

    case GET_USERS_SUCCESS:
      return helper.constructSuccess(state, action);

    case GET_USERS_FAILURE:
      return helper.constructFailure(state, action);

    case GET_USER_TODOS_REQUEST:
      return helper.constructLinkedEntitiesRequest(state, action);

    case GET_USER_TODOS_SUCCESS:
      return helper.constructLinkedEntitiesSuccess(state, action);

    case GET_USER_TODOS_FAILURE:
      return helper.constructLinkedEntitiesFailure(state, action);
    default:
      return state;
  }
};
