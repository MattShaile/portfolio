import React from "react";

import ProjectPreview from "../components/ProjectPreview";

export default class ProjectList extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
      </div>
    );
  }
}
