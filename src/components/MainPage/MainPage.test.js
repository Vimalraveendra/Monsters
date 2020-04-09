import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    fetchCall: jest.fn(),
    monsters: [],
    searchField: ""
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("should  render the Mainpage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

describe("filterMonsters", () => {
  it("should filter the monsters correctly", () => {
    expect(wrapper.instance().filteredMonsters()).toEqual([]);
  });

  it("should filter the monsters with searchField item present", () => {
    const mockProps = {
      fetchCall: jest.fn(),
      monsters: [
        {
          id: 123,
          name: "John snow",
          email: "Johnsnow@gmail.com"
        }
      ],
      searchField: "Jo"
    };
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filteredMonsters()).toEqual([
      {
        id: 123,
        name: "John snow",
        email: "Johnsnow@gmail.com"
      }
    ]);
  });

  it("should filter the monsters with searchField item present", () => {
    const mockProps = {
      fetchCall: jest.fn(),
      monsters: [
        {
          id: 123,
          name: "John snow",
          email: "Johnsnow@gmail.com"
        }
      ],
      searchField: "hel"
    };
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filteredMonsters()).toEqual([]);
  });
});
