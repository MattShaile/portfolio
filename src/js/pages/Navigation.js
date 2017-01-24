import React from "react";

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

  render() {
    return (
      <div>
        <div class={"closeNav " + this.state.navOpenClass} onMouseDown={this.toggleNav.bind(this)}
             onTouchStart={this.toggleNav.bind(this)}></div>
        <header>
          <div class="container">
            <div class="title">
              <h1>Matthew Shaile</h1>
              <h2> Portfolio</h2>
            </div>
            <nav>
              <ul class={this.state.navOpenClass}>
                <li><a href="#Javascript">Javascript</a></li>
                <li><a href="#Unity">Unity</a></li>
                <li><a href="#Casino">Casino</a></li>
                <li><a href="#More">More</a></li>
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
