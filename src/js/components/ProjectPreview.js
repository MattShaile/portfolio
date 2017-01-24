import React from "react";

export default class ProjectPreview extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="ppContainer">
        <div class="ppTitleBg"></div>

        <img class="ppImage" src={this.props.thumb}/>

        <p class="ppTitle">{this.props.name}</p>
        <p><span class="ppTechnologiesLabel">Technologies:</span> <span
          class="ppTechnologies">{this.props.tech}</span></p>

        <p class="ppDescription">
          {this.props.description}
        </p>

      </div>
    );
  }
}
