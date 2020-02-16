import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Select from "./Select";

const options = [
  { id: 1, value: "toto" },
  { id: 2, value: "titi" },
  { id: 3, value: "tutu" }
];

const onSelect = jest.fn();

describe("Select test", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Select options={options} onSelect={onSelect} />);
  });

  it("should match snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should call onSelect on value change", () => {
    component.find("select").simulate("change", { target: {} });
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("should call onSelect with correct value", () => {
    component.find("select").simulate("change", { target: { value: 1 } });
    expect(onSelect).toHaveBeenCalledWith(1);
  });
});
