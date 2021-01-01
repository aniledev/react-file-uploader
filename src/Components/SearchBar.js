import React from "react";
import SearchBox from "./SearchBox";
import FilterOptions from "./FilterOptions";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox />
          <FilterOptions />
        </div>
      </div>
    );
  }
}
