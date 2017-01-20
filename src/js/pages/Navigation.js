import React from "react";

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
        <header>
          <h1 class="title">
            Matthew Shaile<br />Portfolio
          </h1>
          <nav>
            <ul class={this.state.navOpenClass}>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Unity</a></li>
              <li><a href="#">Casino</a></li>
              <li><a href="#">More</a></li>
            </ul>
          </nav>
          <div class="menuButton" onClick={this.toggleNav.bind(this)}>
          </div>
        </header>

        <div class="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
