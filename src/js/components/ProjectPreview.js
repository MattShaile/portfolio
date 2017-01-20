import React from "react";

export default class ProjectPreview extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="ppContainer">
        <img class="ppImage" src="img/html5.png" />

        <p class="ppTitle">Product Title</p>
        <p class="ppTechnologies">Key technologies: <span class="bold">Javascript, React, Redux</span></p>

        <p class="ppDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...
        </p>

      </div>
    );
  }
}
