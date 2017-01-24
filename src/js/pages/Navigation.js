import React from "react";
import {Link} from "react-router";

import AchievementBar from "../components/AchievementBar";

export default class Navigation extends React.Component {

  constructor() {
    super();

    this.state = {
      navOpen: false,
      navOpenClass: "hideNav"
    }
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen,
      navOpenClass: !this.state.navOpen ? "showNav" : "hideNav"
    });
  }

  closeNav() {
    this.setState({
      navOpen: false,
      navOpenClass: "hideNav"
    });
  }

  render() {
    return (
      <div>
        <div class={"closeNav " + this.state.navOpenClass} onMouseDown={this.closeNav.bind(this)}
             onTouchStart={this.closeNav.bind(this)}></div>
        <header>
          <div class="container">
            <div class="title">
              <h1>Matthew Shaile</h1>
              <h2> Portfolio</h2>
            </div>
            <nav>
              <ul class={this.state.navOpenClass}>
                <li><Link to="projects/javascript">Javascript</Link></li>
                <li><Link to="projects/unity">Unity</Link></li>
                <li><Link to="projects/igaming">iGaming</Link></li>
                <li><Link to="projects/more">More</Link></li>
              </ul>
            </nav>
          </div>
          <div class="hamburger" onClick={this.toggleNav.bind(this)}>&#x2261;</div>
        </header>

        <div class="content">
          {this.props.children}
        </div>

        <AchievementBar/>
      </div>
    );
  }
}
