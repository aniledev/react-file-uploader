import React, { Component } from "react";
import "../Styles/SearchBox.css";
// react component from a third party library used to display VG icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch} />
        {/* USE VALUE TO GET THE VALUE OF THE INPUT*/}
        <input placeholder="Search term" value={this.props.searchTerm} />
      </div>
    );
  }
}
