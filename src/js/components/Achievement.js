import React from "react";

export default class Achievement extends React.Component {

  constructor() {
    super();

    this.state = {
      unlocked: false
    };
  }

  unlock() {
    this.setState({
      unlocked: true
    });
  }

  render() {
    return (
      <div class="achievement" onClick={this.unlock.bind(this)}>
        <img class={this.state.unlocked ? "unlocked" : "locked"} src={this.props.img}/>
      </div>
    );
  }
}
