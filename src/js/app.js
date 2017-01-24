import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from "react-redux";

import store from "./store";

import Navigation from "./pages/Navigation";
import ProjectList from "./pages/ProjectList";

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Navigation}>
        <IndexRoute component={ProjectList}></IndexRoute>
      </Route>
    </Router>
  </Provider>
  , app);
