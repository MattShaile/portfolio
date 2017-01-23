import React from "react";

import Achievement from "./Achievement";

export default class AchievementBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="achievementBar">
        <Achievement/>
        <Achievement/>
        <Achievement/>
        <Achievement/>
        <Achievement/>
        <Achievement/>
        <Achievement/>
        <Achievement/>
        <Achievement/>
      </div>
    );
  }
}
