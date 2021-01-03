import React, { Component } from "react";
import "../Styles/SearchBar.css";
import SearchBox from "./SearchBox";
import FilterOptions from "./FilterOptions";

// THIS IS THE SECOND COMPONENT THAT IS GETTING SEARCHTERM AND FILTEROPTION AS PROPS IS THE SEARCHBAR COMPONENT
// PASS
export default class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox
            searchTerm={this.props.searchTerm}
            handleUpdate={this.props.handleUpdate}
          />
          <FilterOptions
            filterOption={this.props.filterOption}
            handleFilterChange={this.props.handleFilterChange}
          />
        </div>
      </div>
    );
  }
}
