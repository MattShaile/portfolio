import {applyMiddleware, createStore} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return {}
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return {}
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(`unable write to localStorage: ${err}`)
  }
};

const middleware = applyMiddleware(promise(), thunk); //logger()

const store = createStore(reducer, loadState(), middleware);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
