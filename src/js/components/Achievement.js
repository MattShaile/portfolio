import React from "react";
import {connect} from "react-redux";

import {lockAchievement} from "../actions/achievementActions";

@connect((store) => {
  return {
    achievements: store.achievements.achievements
  };
})
export default class Achievement extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
  }

  lock() {
    this.props.dispatch(lockAchievement(this.props.name));
  }

  render() {
    return (
      <div class="achievement" onClick={this.lock.bind(this)}>
        <img class={this.props.achievements[this.props.name].unlocked ? "unlocked" : "locked"} width="80" height="80"
             src={this.props.img}/>
      </div>
    );
  }
}
