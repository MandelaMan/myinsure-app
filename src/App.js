import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Comparison from "./pages/Comparison";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Quote from "./pages/Quote";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/insurance-quotes" exact component={Quotes} />
          <Route path="/quote/:details/:plan" exact component={Quote} />
          <Route path="/compare" exact component={Comparison} />
        </Switch>
      </GlobalProvider>
    </>
  );
};

export default withRouter(App);
