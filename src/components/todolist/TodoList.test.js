import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import TodoList from "./TodoList";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe("Test TodoList", () => {
  it("should fucking work at some point!!!", () => {});
  // describe("snapshot", () => {
  //   beforeEach(() => {
  //     jest.mock("../common/usefetchdata/useFetchData", () => ({
  //       __esModule: true,
  //       default: () => [false, "", []]
  //     }));
  //     jest.mock("react-redux", () => ({
  //       useSelector: jest.fn()
  //     }));
  //   });
  //   it("should match snapshot", () => {
  //     expect(toJson(shallow(<TodoList />))).toMatchSnapshot();
  //   });
  // });
  // it("should display laoding when is fetching", () => {
  //   const store = mockStore({
  //     isFetching: false,
  //     errorMessage: "",
  //     items: [],
  //     linkedEntities: {
  //       isFetching: true,
  //       errorMessage: "",
  //       items: []
  //     }
  //   });
  //   console.log("TCL: store", store);
  //   const component = mount(
  //     <Provider store={store}>
  //       <TodoList />
  //     </Provider>
  //   );
  //   console.log("TCL: component", component.debug());
  //   expect(component.find("p").length).toEqual(1);
  // });
});
