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

  constructor(props) {
    super();

    console.log(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {

    if (!this.props.projects.fetched) {
      return <div>Loading...</div>
    }

    const project = _.find(this.props.projects.data.projects, function (project) {
      return project.name == "Roulette";
    });

    return (
      <div class="project">
        <div class="title-bg"></div>

        <img class="image" src={project.thumb}/>

        <p class="title">{project.name}</p>
        <p><span class="technologies-label">Technologies:</span> <span class="technologies">{project.tech}</span></p>
        <p><span class="source-label">Source:</span> <a class="source">{project.code}</a></p>
        <p><span class="demo-label">Demo:</span> <a class="demo">{project.demo}</a></p>

        <p class="description">
          {project.description}
        </p>

      </div>
    );
  }
}
