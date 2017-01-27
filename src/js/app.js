import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from "react-redux";

import store from "./store";

import Navigation from "./pages/Navigation";
import ProjectList from "./pages/ProjectList";
import Project from "./pages/Project";
import Welcome from "./pages/Welcome";

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path="/" component={Welcome}>
      </Route>
      <Route path="/projects" component={Navigation}>
        <Route path="/projects(/:technology)" component={ProjectList}/>
      </Route>
      <Route path="/project" component={Navigation}>
        <Route path="/project(/:project)" component={Project}/>
      </Route>
    </Router>
  </Provider>
  , app);
