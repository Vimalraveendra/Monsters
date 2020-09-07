import React, { Component } from "react";

import "./App.css";

import MainPage from "../components/MainPage/MainPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  fetchCall = (fetch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  };

  render() {
    return (
      <MainPage
        monsters={this.state.monsters}
        searchField={this.state.searchField}
        fetchCall={this.fetchCall}
        handleChange={this.handleChange}
      />
    );
  }
}
export default App;
