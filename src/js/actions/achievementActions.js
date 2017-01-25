export const actions = {
  UNLOCK_ACHIEVEMENT: "UNLOCK_ACHIEVEMENT",
  LOCK_ACHIEVEMENT: "LOCK_ACHIEVEMENT"
};

export function unlockAchievement(achievement) {
  return {
    type: actions.UNLOCK_ACHIEVEMENT,
    payload: achievement
  }
}

export function lockAchievement(achievement) {
  return {
    type: actions.LOCK_ACHIEVEMENT,
    payload: achievement
  }
}

