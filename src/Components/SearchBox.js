import React from "react";
import "../Styles/SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBox extends React.Component {
  ender() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder="Search term" />
      </div>
    );
  }
}
