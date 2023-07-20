import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ApplicationRouter from "./routes";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
