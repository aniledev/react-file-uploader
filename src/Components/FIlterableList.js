import React, { Component } from "react";
import "../Styles/FilterableList.css";
import ListItem from "./ListItem";

export default class FilterableList extends Component {
  render() {
    // CREAT A VARIABLE TO HOLD DATA FROM PROPS
    const LIST = this.props.files.map((file, key) => (
      <ListItem {...file} key={key} />
    ));
    // WHAT IS GOING ON WITH THE USE OF THE SPREAD OPERATOR HERE?
    return <div className="FilterableList">{LIST}</div>;
  }
}

// ESTABLISH DEFAULT PROPS
FilterableList.defaultProps = {
  files: [],
};
