import React from "react";
import {Link} from "react-router";

export default class Welcome extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="welcome">
        <p class="p-1">Welcome to my Portfolio</p>
        <p class="p-2">Unlock achievements as you browse</p>
        <p class="p-3">Front end: React / Redux / SASS</p>
        <p class="p-4">Back end: Express.js / MySQL</p>
        <p class="p-5">Have fun!</p>
        <Link class="p-6" to="/projects/web">Continue</Link>
      </div>
    );
  }
}
