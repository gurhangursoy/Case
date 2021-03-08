import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import MovieDetails from "../components/MovieDetails";

function RouterList() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies/:id" children={<MovieDetails />} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterList;
