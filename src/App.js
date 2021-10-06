import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { Home } from "./pages/Home/Home";
import Profile from "./pages/User/index";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route
          path="/"
          exact
          component={() =>
            isAuthenticated ? <Redirect to="/home" /> : <Login />
          }
        />
        {isAuthenticated ? (
          <>
            <Route path="/home" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
          </>
        ) : null}
      </Switch>
    </>
  );
}

export default App;
