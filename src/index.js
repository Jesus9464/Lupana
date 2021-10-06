import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Context from "./ContextToggle";

const container = document.getElementById("root");

const theme = {
  background: "#c0392b",
};

const AppBroser = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Context.Provider>
    <AppBroser />
  </Context.Provider>,
  container
);
