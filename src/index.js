import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./components/theme";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
