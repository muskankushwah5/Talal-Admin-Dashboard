import React from "react";
import ReactDOM from "react-dom";

import {Toaster} from "react-hot-toast"
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
  <Toaster/>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
