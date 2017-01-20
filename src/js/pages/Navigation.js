import React from "react";

export default class Navigation extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 class="header">
          Matthew Shaile<br />Portfolio
        </h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
