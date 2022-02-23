import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page1" render={({ match: { url } }) => <Switch></Switch>} />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
