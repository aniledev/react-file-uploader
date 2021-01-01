import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// break the application into single-minded components
// then decide which data are state and which are props and where state would live in your components hierarchy
// finally add the interactivity for the user
