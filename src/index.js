import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ApplicationRouter from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
