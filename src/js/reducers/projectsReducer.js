import {actions} from "../actions/projectsActions";

const defaultState = {
  fetching: false,
  fetched: false,
  error: null,
  data: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.FETCH_PROJECTS_PENDING:
    {
      return { ...state, fetching: true };
    }
    case actions.FETCH_PROJECTS_REJECTED:
    {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case actions.FETCH_PROJECTS_FULFILLED:
    {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data
      };
    }
  }

  return state;
}
