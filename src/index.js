import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/Components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
