import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "bootswatch/dist/lux/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Routes from "./routes";
import storeConfig from "./store";

ReactDOM.render(
  <Provider store={storeConfig()}>
  <HashRouter>
       <Navbar />
       <Routes />
     </HashRouter>
   </Provider>,
  document.getElementById("root")
);

