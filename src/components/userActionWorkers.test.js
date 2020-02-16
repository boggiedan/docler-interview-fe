import "regenerator-runtime/runtime";
import { fetchAllWorker, fetchUserTodos } from "./userActionWorkers";
import { request, success, failure } from "./common/commonUserActions";
import { put, call } from "redux-saga/effects";
import * as actions from "./userActionTypes";
import * as api from "./userService";

describe("Test user action workers", () => {
  describe("Test fetch all worker", () => {
    describe("Test success call with empty users response", () => {
      const generator = fetchAllWorker();

      it("should send REQUEST response to reducer", () => {
        expect(generator.next().value).toEqual(
          put(request(actions.GET_USERS_REQUEST))
        );
      });

      it("should call fetch All API", () => {
        expect(generator.next().value).toEqual(call(api.fetchAll));
      });

      it("should have valid status and return users", () => {
        const response = { status: 200, json: () => [] };

        expect(generator.next(response).value).toEqual([]);
      });

      it("should send SUCCESS response to reducer", () => {
        expect(generator.next([]).value).toEqual(
          put(success(actions.GET_USERS_SUCCESS, []))
        );
      });

      it("should finish the process", () => {
        expect(generator.next().done).toBe(true);
      });
    });

    describe("Test success call with filled users response", () => {
      const generator = fetchAllWorker();

      it("should send REQUEST response to reducer", () => {
        expect(generator.next().value).toEqual(
          put(request(actions.GET_USERS_REQUEST))
        );
      });

      it("should call fetch All API", () => {
        expect(generator.next().value).toEqual(call(api.fetchAll));
      });

      it("should have valid status and return users", () => {
        const response = { status: 200, json: () => [{ id: 1 }] };

        expect(generator.next(response).value).toEqual([{ id: 1 }]);
      });

      it("should send SUCCESS response to reducer", () => {
        expect(generator.next([{ id: 1 }]).value).toEqual(
          put(success(actions.GET_USERS_SUCCESS, [{ id: 1 }]))
        );
      });

      it("should call fetchUserTodos", () => {
        expect(generator.next([{ id: 1 }]).value).toEqual(
          fetchUserTodos({
            type: actions.FETCH_USER_TODOS,
            payload: {
              data: 1
            }
          })
        );
      });

      it("should finish the process", () => {
        expect(generator.next().done).toBe(true);
      });
    });

    describe("Test success call with invalid response status", () => {
      const generator = fetchAllWorker();

      it("should send REQUEST response to reducer", () => {
        expect(generator.next().value).toEqual(
          put(request(actions.GET_USERS_REQUEST))
        );
      });

      it("should call fetch All API", () => {
        expect(generator.next().value).toEqual(call(api.fetchAll));
      });

      it("should send FAILURE for invalid response status", () => {
        const response = { status: 404 };
        const e = { message: "Users could not be retrieved" };

        expect(generator.next(response).value).toEqual(
          put(failure(actions.GET_USERS_FAILURE, e.message))
        );
      });
    });

    describe("Test failed call to API", () => {
      const generator = fetchAllWorker();

      it("should send REQUEST response to reducer", () => {
        expect(generator.next().value).toEqual(
          put(request(actions.GET_USERS_REQUEST))
        );
      });

      it("should call fetch All API", () => {
        expect(generator.next().value).toEqual(call(api.fetchAll));
      });

      it("should send FAILURE for error during API call", () => {
        const e = { message: "error during API call" };

        expect(generator.throw(e).value).toEqual(
          put(failure(actions.GET_USERS_FAILURE, e.message))
        );
      });
    });
  });
});
