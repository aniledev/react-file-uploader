import React from "react";
import "../Styles/App.css";
import SearchBar from "./SearchBar";
import FiterableList from "./FilterableList";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />/ // pass files prop along to FilterableList
        <FiterableList files={this.props.files} />
      </div>
    );
  }
}
