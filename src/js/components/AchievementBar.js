import React from "react";
import {connect} from "react-redux";

import signal from "signal-js";

import store from "../store";
import Achievement from "./Achievement";

@connect((store) => {
  return {
    achievements: store.achievements.achievements
  };
})
export default class AchievementBar extends React.Component {

  constructor(state) {
    super(state);

    this.state = {
      class: "notification",
      text: ""
    };

    this.pendingUnlocks = [];
    this.animating = false;

    signal.on("achievementUnlocked", this.unlockAchievement.bind(this));
    signal.on("achievementLocked", this.lockAchievement.bind(this));
  }

  lockAchievement(achievement) {
    this.pendingUnlocks.push(<div class="text">Achievement deleted<br /> ({achievement})</div>);

    this.nextUnlock();
  }

  unlockAchievement(achievement) {
    this.pendingUnlocks.push(<div class="text">Achievement unlocked!<br />{this.props.achievements[achievement].description}</div>);

    this.nextUnlock();
  }

  nextUnlock() {
    if (this.animating) {
      return;
    }

    if (this.pendingUnlocks.length > 0) {

      this.animating = true;

      let achievementText = this.pendingUnlocks.shift();

      this.setState({
        class: "notification open",
        text: achievementText
      });

      setTimeout(() => {
        this.setState({
          class: "notification",
          text: this.state.text
        });

        setTimeout(() => {
          this.animating = false;
          this.nextUnlock();
        }, 1000);
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <div class={this.state.class}>{this.state.text}</div>
        <div class="achievement-bar">
          <Achievement name="Casino" img="/img/gambling.png"/>
          <Achievement name="Unity" img="/img/unity.png"/>
          <Achievement name="HTML5" img="/img/html5.png"/>
          <Achievement name="Five" img="/img/five.png"/>
          <Achievement name="Ten" img="/img/ten.png"/>
        </div>
      </div>
    );
  }
}
