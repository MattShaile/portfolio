import React from "react";
import {Link} from "react-router";

import AchievementBar from "./AchievementBar";

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
        <div class={this.state.navOpenClass + " closeNav"} onMouseDown={this.closeNav.bind(this)}
             onTouchStart={this.closeNav.bind(this)}></div>
        <header>
          <div class="container">
            <div class="title">
              <h1>Matthew Shaile</h1>
              <h2> Portfolio</h2>
            </div>
            <nav>
              <ul class={this.state.navOpenClass}>
                <li><Link to="/projects/web" activeClassName="link-selected"
                          onClick={this.closeNav.bind(this)}>Web</Link>
                </li>
                <li><Link to="/projects/games" activeClassName="link-selected"
                          onClick={this.closeNav.bind(this)}>Games</Link></li>
                <li><Link to="/projects/casino" activeClassName="link-selected" onClick={this.closeNav.bind(this)}>Casino</Link>
                </li>
                <li><Link to="/projects/server" activeClassName="link-selected"
                          onClick={this.closeNav.bind(this)}>Server</Link></li>
                <li><Link to="/contact" activeClassName="link-selected"
                         onClick={this.closeNav.bind(this)}>Contact</Link></li>
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
