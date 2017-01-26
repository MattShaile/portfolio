import axios from "axios";

export const actions = {
  FETCH_PROJECTS: "FETCH_PROJECTS",
  FETCH_PROJECTS_PENDING: "FETCH_PROJECTS_PENDING",
  FETCH_PROJECTS_FULFILLED: "FETCH_PROJECTS_FULFILLED",
  FETCH_PROJECTS_REJECTED: "FETCH_PROJECTS_REJECTED"
};

export function fetchProjects() {
  return {
    type: actions.FETCH_PROJECTS,
    payload: axios.get("http://matthewshaile.com:3000")
  }
}

