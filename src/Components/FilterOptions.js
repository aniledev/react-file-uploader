import React, { Component } from "react";
import "../Styles/FilterOptions.css";

// THIS COMPONENT IS JUST A LINE OF RADIO BUTTONS

export default class FilterOptions extends Component {
  render() {
    // USE OBJECT DESTRUCTURING TO GET THE VALUE OF FILTEROPTION FROM PROPS
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All"
              id="filter_all"
              name="filter"
              checked={filterOption === "All"}
              // IF FILTEROPTION === ALL, THEN THIS EVALUATES TO CHECKED={TRUE}
            />
            All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input
              type="radio"
              value="Uploaded"
              id="filter_uploaded"
              name="filter"
              checked={filterOption === "Uploaded"}
            />
            Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_synced">
            <input
              type="radio"
              value="Synced"
              id="filter_synced"
              name="filter"
              checked={filterOption === "Synced"}
            />
            Synced
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_new">
            <input
              type="radio"
              value="New"
              id="filter_new"
              name="filter"
              checked={filterOption === "New"}
            />
            New
          </label>
        </div>
      </div>
    );
  }
}
