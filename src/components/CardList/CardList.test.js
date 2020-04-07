import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";
import expectExport from "expect";

it("should render the CardList Component", () => {
  const mockMonsters = [
    {
      id: 1234,
      name: "John",
      email: "John@gmail.com"
    }
  ];
  const wrapper = shallow(<CardList monsters={mockMonsters} />);
  expectExport(wrapper).toMatchSnapshot();
});
