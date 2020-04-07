import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";
import expectExport from "expect";

it("should render the SearchBox Component ", () => {
  const mockPlaceholder = "search items";
  const wrapper = shallow(<SearchBox placeholder={mockPlaceholder} />);
  expectExport(wrapper).toMatchSnapshot();
});
