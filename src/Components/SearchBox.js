import React from "react";

import React, { Component } from "react";

export default class SearchBox extends Component {
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
