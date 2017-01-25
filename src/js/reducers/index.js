import {combineReducers } from "redux";

import projects from "./projectsReducer";
import achievements from "./achievementsReducer";

export default combineReducers({
  projects,
  achievements
});
