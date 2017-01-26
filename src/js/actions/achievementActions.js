export const actions = {
  UNLOCK_ACHIEVEMENT: "UNLOCK_ACHIEVEMENT",
  LOCK_ACHIEVEMENT: "LOCK_ACHIEVEMENT",
  VIEWED_PROJECT: "VIEWED_PROJECT"
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

export function viewedProject(projectId) {
  return {
    type: actions.VIEWED_PROJECT,
    payload: projectId
  }
}

