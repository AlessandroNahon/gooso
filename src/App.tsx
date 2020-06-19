import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {
  TypedUseSelectorHook,
  useSelector as useSelectorGeneric,
} from "react-redux";

import { AppState } from "./types";
import { selectAuthedUser } from "./store/selectors/user";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const useSelector: TypedUseSelectorHook<AppState> = useSelectorGeneric;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<any>(undefined);
  const currentUser = useSelector(selectAuthedUser);
  const history = useHistory();

  const auth_token = localStorage.getItem("auth_session");

  useEffect(() => {
    setIsAuthenticated(auth_token);
    if (!isAuthenticated && !currentUser) history.push("/login");
  }, [auth_token, currentUser, history, isAuthenticated]);

  return (
    <div className="App">
      <div>
        <Switch>
          {isAuthenticated && currentUser && (
            <>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </>
          )}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
