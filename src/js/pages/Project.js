import React from "react";
import {connect} from "react-redux";

import _ from "lodash";

import {fetchProjects} from "../actions/projectsActions";

@connect((store) => {
  return {
    projects: store.projects
  };
})
export default class Project extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {

    if (!this.props.projects.fetched) {
      return <div>Loading...</div>
    }

    const projectName = this.props.params.project;

    const project = _.find(this.props.projects.data.projects, (project) => {
      return project.name.toLowerCase() == projectName;
    });

    console.log(this.props);

    return (
      <div>
        <div class="project">

          <div class="title-bg"></div>

          <div class="main-container">
            <h3 class="title">{project.name}</h3>
            <img class="image" src={project.image}/>
          </div>
          <div class="copy-container">
            <div class="link-container">
              <p><span class="label">Technologies:</span> <span class="technologies">{project.tech}</span></p>
              <p><span class="label">Source:</span> <a href={project.code}>{project.codeLabel}</a></p>
              <p><span class="label">Demo:</span> <a href={project.demo}>{project.demoLabel}</a></p>
            </div>


            <p class="description">
              {project.description}
            </p>
          </div>

        </div>
      </div>
    );
  }
}
