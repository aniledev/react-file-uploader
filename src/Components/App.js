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

  // CREATE A METHOD TO UPDATE STATE
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term,
    });
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option,
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={(term) => this.updateSearchTerm(term)}
        />
        {/* pass files prop along to FilterableList */}
        {/* SearchBar also gets passed state because this is where searchTerm is updated */}
        <FilterableList
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}
