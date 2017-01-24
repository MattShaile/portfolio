import React from "react";

export default class ProjectPreview extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="project-preview">
        <div class="title-bg"></div>

        <img class="image" src={this.props.thumb}/>

        <p class="title">{this.props.name}</p>
        <p><span class="technologies-label">Technologies:</span> <span
          class="technologies">{this.props.tech}</span></p>

        <p class="description">
          {this.props.description}
        </p>

      </div>
    );
  }
}
