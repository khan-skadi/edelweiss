import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import dotenv from "dotenv";

import App from "./components/app/App";

import theme from "./theme/theme";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

// fonts
import "./assets/fonts/BacktrackRegular.ttf";
import "./assets/fonts/StonyIsland.ttf";
import "./assets/fonts/TheFrontman.ttf";
import "./assets/fonts/Barlow.ttf";

dotenv.config();

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://essapi.online";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
