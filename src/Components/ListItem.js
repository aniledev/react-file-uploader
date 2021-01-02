import React, { Component } from "react";
import "../Styles/ListItem.css";
import ControlBar from "./ControlBar";
// IMPORT FONT AWESOME LIBRARY
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// IMPORT SPECIFIC ICONS FROM FONT AWESOME
import {
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";

// CREATE THE COMPONENT FOR THE INDIVIDUAL LIST ITEM

export default class ListItem extends Component {
  render() {
    const ICONS = {
      jpg: faFileImage,
      mov: faFileVideo,
      txt: faFileAlt,
      mp3: faFileAudio,
    };
    return (
      <div className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            <FontAwesomeIcon icon={ICONS[this.props.fileType] || faFileAlt} />
          </div>
        </div>
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <div className="ListItem__title">{this.props.name}</div>
            <div className="ListItem__size">{this.props.size}</div>
          </div>
          <div className="ListItem__actions">
            <div className="ListItem__status">{this.props.status}</div>
            <ControlBar />
          </div>
        </div>
      </div>
    );
  }
}
