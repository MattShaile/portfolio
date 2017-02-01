import {actions} from "../actions/achievementActions";

import signal from "signal-js";

const defaultState = {
  achievements: {
    Casino: {
      unlocked: false,
      description: "View a casino project"
    },
    Unity: {
      unlocked: false,
      description: "View a Unity project"
    },
    Javascript: {
      unlocked: false,
      description: "View a Javascript project"
    },
    React: {
      unlocked: false,
      description: "View a React project"
    },
    Five: {
      unlocked: false,
      description: "Viewed 5 projects"
    },
    Ten: {
      unlocked: false,
      description: "Viewed 10 projects"
    }
  },
  viewedProjectsMask: 0,
  viewedProjectsCount: 0
};

export default function reducer(state = defaultState, action) {

  function setAchievement(obj, name, value) {
    if (obj[name].unlocked != value) {
      signal.trigger(value ? "achievementUnlocked" : "achievementLocked", name);
    }

    obj[name].unlocked = value;
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
