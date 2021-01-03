import React, { Component } from "react";
import "../Styles/FilterableList.css";
import ListItem from "./ListItem";

// USE THE TWO VALUES PASSED IN AS PROPS TO FILTER THE ARRAY OF FILES DISPLAYED
// ACCESS THE VALUES FROM THE PROPS, ITERATE OVER THE FILES ARRAY KEEPING THOSE THAT MATCH THE CRITERIA: THE FILE NAME CONTAINS THE SEARCH TERM AND THE FILE STATUS IS EQUAL TO THE FILTEROPTION OR THE FILTEROPTION IS ALL

export default class FilterableList extends Component {
  render() {
    // CREAT A VARIABLE TO HOLD DATA FROM PROPS OBJECT DESTRUCTURING
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
      .filter(
        (file) =>
          file.name.includes(searchTerm) &&
          (filterOption === "All" || file.status === filterOption)
      )
      .map((file, key) => <ListItem {...file} key={key} />);
    // WHAT IS GOING ON WITH THE USE OF THE SPREAD OPERATOR HERE?
    return <div className="FilterableList">{list}</div>;
  }
}

// ESTABLISH DEFAULT PROPS
FilterableList.defaultProps = {
  files: [],
};
