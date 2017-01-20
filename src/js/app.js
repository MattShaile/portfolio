import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Navigation from "./pages/Navigation";
import ProjectList from "./pages/ProjectList";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Navigation}>
      <IndexRoute component={ProjectList}></IndexRoute>
    </Route>
  </Router>
  , app);
