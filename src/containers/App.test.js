import { shallow } from "enzyme";
import React from "react";
import App from "./App";
<<<<<<< HEAD
import fetchMock from "fetch-mock";
=======
// import fetchMock from "fetch-mock";
>>>>>>> e9fc009b35bf3854b516c4981e87ae6a75bb69b6

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

it("should render the App component without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

describe("handleChange", () => {
  it("should handle the change and setstate after recieving the input", () => {
    const mockProps = {
      target: {
<<<<<<< HEAD
        value: "hel"
      }
=======
        value: "hel",
      },
>>>>>>> e9fc009b35bf3854b516c4981e87ae6a75bb69b6
    };

    const expectedAction = {
      monsters: [],
<<<<<<< HEAD
      searchField: "hel"
=======
      searchField: "hel",
>>>>>>> e9fc009b35bf3854b516c4981e87ae6a75bb69b6
    };
    wrapper.instance().handleChange(mockProps);
    expect(wrapper.state()).toEqual(expectedAction);
  });
});
<<<<<<< HEAD
describe("fetchAPI", () => {
  it("should call fetchApi to get the monsters", async () => {
    const mockProps = {
      monsters: [
        {
          id: 123,
          name: "hello",
          email: "hello@gmail.com"
        }
      ]
    };

    fetchMock
      .getOnce("https://jsonplaceholder.typicode.com/users", mockProps)
      .then(() => {
        expect(wrapper.state()).toEqual("hello");
      });
  });
});
=======
// describe("fetchAPI", () => {
//   it("should call fetchApi to get the monsters", async () => {
//     const mockProps = {
//       monsters: [
//         {
//           id: 123,
//           name: "hello",
//           email: "hello@gmail.com"
//         }
//       ]
//     };

//     fetchMock
//       .getOnce("https://jsonplaceholder.typicode.com/users", mockProps)
//       .then(() => {
//         expect(wrapper.state()).toEqual("hello");
//       });
//   });
// });
>>>>>>> e9fc009b35bf3854b516c4981e87ae6a75bb69b6
