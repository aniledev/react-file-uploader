import React, { Component } from "react";
import "../Styles/App.css";
import SearchBar from "./SearchBar";
import FilterableList from "./FilterableList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar /> {/* pass files prop along to FilterableList */}
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}
