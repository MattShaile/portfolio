import React from "react";

import store from "../store";
import Achievement from "./Achievement";

export default class AchievementBar extends React.Component {

  constructor(state) {
    super(state);

    this.state = {
      class: "notification",
      text: ""
    };

    this.pendingUnlocks = [];
    this.animating = false;
  }

  unlockAchievement(achievement) {
    this.pendingUnlocks.push(achievement);

    this.nextUnlock();
  }

  nextUnlock() {
    if (this.animating) {
      return;
    }

    if (this.pendingUnlocks.length > 0) {

      this.animating = true;

      let achievement = this.pendingUnlocks.shift();

      this.setState({
        class: "notification open",
        text: achievement
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
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <div class={this.state.class}>ACHIEVEMENT UNLOCKED! {this.state.text}</div>
        <div class="achievement-bar">
          <Achievement name="Casino" img="/img/gambling.png"/>
          <Achievement name="Unity" img="/img/unity.png"/>
          <Achievement name="HTML5" img="/img/html5.png"/>
          <Achievement name="Time" img="/img/time.png"/>
          <Achievement name="Five" img="/img/five.png"/>
          <Achievement name="Ten" img="/img/ten.png"/>
        </div>
      </div>
    );
  }
}
