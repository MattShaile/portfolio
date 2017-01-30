import {actions} from "../actions/achievementActions";

import signal from "signal-js";
import Cookie from "js-cookie";

const defaultState = {
  achievements: {
    Casino: {
      unlocked: Cookie.get("Casino"),
      description: "View a casino project"
    },
    Unity: {
      unlocked: Cookie.get("Unity"),
      description: "View a Unity project"
    },
    HTML5: {
      unlocked: Cookie.get("HTML5"),
      description: "View an Javascript project"
    },
    React: {
      unlocked: Cookie.get("React"),
      description: "View an React project"
    },
    Five: {
      unlocked: Cookie.get("Five"),
      description: "Viewed 5 projects"
    },
    Ten: {
      unlocked: Cookie.get("Ten"),
      description: "Viewed 10 projects"
    }
  },
  viewedProjectsMask: Cookie.get("viewedProjectsMask") || 0,
  viewedProjectsCount: Cookie.get("viewedProjectsCount") || 0
};

export default function reducer(state = defaultState, action) {

  function setAchievement(obj, name, value) {
    if (obj[name].unlocked != value) {
      signal.trigger(value ? "achievementUnlocked" : "achievementLocked", name);
    }

    obj[name].unlocked = value;
    Cookie.set(name, value);
  }

  switch (action.type) {
    case actions.UNLOCK_ACHIEVEMENT:
    {
      let achievements = { ...state.achievements };

      setAchievement(achievements, action.payload, "true");

      return {
        ...state,
        achievements
      };
    }
    case actions.LOCK_ACHIEVEMENT:
    {
      let achievements = { ...state.achievements };
      let viewedProjectsCount = state.viewedProjectsCount;
      let viewedProjectsMask = state.viewedProjectsMask;

      setAchievement(achievements, action.payload, "");

      if (action.payload == "Five" || action.payload == "Ten") {
        Cookie.set("viewedProjectsCount", 0);
        Cookie.set("viewedProjectsMask", 0);
        viewedProjectsCount = 0;
        viewedProjectsMask = 0;
      }

      return {
        ...state,
        viewedProjectsCount,
        viewedProjectsMask,
        achievements
      };
    }
    case actions.VIEWED_PROJECT:
    {
      let achievements = { ...state.achievements };

      let viewedProjectsCount = state.viewedProjectsCount;
      let viewedProjectsMask = state.viewedProjectsMask;

      let newBit = 2<<action.payload;

      let hasBeenViewedBefore = (newBit & viewedProjectsMask) > 0;

      if (!hasBeenViewedBefore) {
        viewedProjectsCount++;
        viewedProjectsMask |= newBit;

        Cookie.set("viewedProjectsCount", viewedProjectsCount);
        Cookie.set("viewedProjectsMask", viewedProjectsMask);

        if (viewedProjectsCount >= 10) {
          setAchievement(achievements, "Ten", true);
        } else if (viewedProjectsCount >= 5) {
          setAchievement(achievements, "Five", true);
        }
      }

      return {
        ...state,
        viewedProjectsCount,
        viewedProjectsMask,
        achievements
      };
    }
  }

  return state;
}
