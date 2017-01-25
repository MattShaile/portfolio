import React from "react";

import Achievement from "./Achievement";

export default class AchievementBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="achievementBar">
        <Achievement img="/img/gambling.png"/>
        <Achievement img="/img/unity.png"/>
        <Achievement img="/img/html5.png"/>
        <Achievement img="/img/time.png"/>
        <Achievement img="/img/five.png"/>
        <Achievement img="/img/ten.png"/>
      </div>
    );
  }
}
