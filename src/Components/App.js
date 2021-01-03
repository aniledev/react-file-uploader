import React, { Component } from "react";
import "../Styles/App.css";
import SearchBar from "./SearchBar";
import FilterableList from "./FilterableList";

export default class App extends Component {
  // initialize stat using a constructor
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filterOption: "All",
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar /> {/* pass files prop along to FilterableList */}
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}
