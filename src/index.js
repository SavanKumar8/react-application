import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import RatingStar from "./RatingStar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RatingStar />
  </StrictMode>,
  rootElement
);
