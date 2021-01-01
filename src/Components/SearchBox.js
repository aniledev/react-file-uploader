import React from "react";

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
