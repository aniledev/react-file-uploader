import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./Components/App";

// add a const variable to hold some data for you to test this app
const FILES = [
  { fileType: "jpg", size: "4.3MB", name: "me on skis.jpg", status: "Synced" },
  {
    fileType: "mov",
    size: "1.3GB",
    name: "cats falling.mov",
    status: "Uploaded",
  },
  {
    fileType: "txt",
    size: "0.9KB",
    name: "My December expenses.txt",
    status: "Uploaded",
  },
  {
    fileType: "mp3",
    size: "3.4MB",
    name: "disturbed_sound_of_silence.mp3",
    status: "New",
  },
];

//
ReactDOM.render(
  <React.StrictMode>
    {/*pass the props into the app Component*/}
    <App files={FILES} />
  </React.StrictMode>,
  document.getElementById("root")
);

// break the application into single-minded components
// then decide which data are state and which props are needed and where state would live in your components hierarchy
// have a working React application with a hierarchy of mponents passing data to each other via props, with no interactivity with the user just yet
// then add basic styling
// finally add the interactivity for the user

/*
HOW TO IMPORT FONT AWESOME COMPONENT
$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons
$ npm install @fortawesome/react-fontawesome
*/
