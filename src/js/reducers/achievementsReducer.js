import {actions} from "../actions/achievementActions";
import Cookie from "js-cookie";

const defaultState = {
  achievements: {
    Casino: {
      unlocked: Cookie.get("Casino"),
      description: "casino thing"
    },
    Unity: {
      unlocked: Cookie.get("Unity"),
      description: "unity thing"
    },
    HTML5: {
      unlocked: Cookie.get("HTML5"),
      description: "js thing"
    },
    Time: {
      unlocked: Cookie.get("Time"),
      description: "etc"
    },
    Five: {
      unlocked: Cookie.get("Five"),
      description: "etc"
    },
    Ten: {
      unlocked: Cookie.get("Ten"),
      description: "etc"
    }
  }
};


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.UNLOCK_ACHIEVEMENT:
    {
      let achievements = { ...state.achievements };
      achievements[action.payload].unlocked = true;
      Cookie.set(action.payload, true);

      return {
        ...state,
        achievements
      };
    }
    case actions.LOCK_ACHIEVEMENT:
    {
      let achievements = { ...state.achievements };
      achievements[action.payload].unlocked = false;
      Cookie.remove(action.payload);

      return {
        ...state,
        achievements
      };
    }
  }

  return state;
}
