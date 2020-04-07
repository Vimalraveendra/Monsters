import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("should render the card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
