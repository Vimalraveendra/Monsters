import React, { Component } from "react";
import CardList from "../components/CardList/CardList";
import "./App.css";
import SearchBox from "../components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  filteredMonsters = () => {
    return this.state.monsters.filter(monster => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}
export default App;
