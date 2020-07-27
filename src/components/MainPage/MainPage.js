import React, { Component } from "react";
import CardList from "../CardList/CardList";
import "./MainPage.css";
import SearchBox from "../SearchBox/SearchBox";

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchCall(fetch);
  }
  filteredMonsters = () => {
    return this.props.monsters.filter(monster => {
      return monster.name
        .toLowerCase()
        .includes(this.props.searchField.toLocaleLowerCase());
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.props.handleChange}
        />
        <CardList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}
export default MainPage;
