import React from "react";
import {Link, browserHistory} from "react-router";

export default class Welcome extends React.Component {

  constructor() {
    super();
  }

  skip() {
    browserHistory.push("/projects/games");
  }

  render() {
    return (
      <div class="welcome" onMouseDown={this.skip.bind(this)}>
        <p class="p-1">Welcome to my Portfolio</p>
        <p class="p-2">Unlock achievements as you browse</p>
        <p class="p-3">Front end: React / Redux / Sass</p>
        <p class="p-4">Back end: Express.js / MySQL</p>
        <p class="p-5">Have fun!</p>
        <Link class="p-6" to="/projects/games">Continue</Link>
      </div>
    );
  }
}
