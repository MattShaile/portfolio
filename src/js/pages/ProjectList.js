import React from "react";
import {connect} from "react-redux";

import _ from "lodash";

import ProjectPreview from "../components/ProjectPreview";

import {fetchProjects} from "../actions/projectsActions";

@connect((store) => {
  return {
    projects: store.projects
  };
})
export default class ProjectList extends React.Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {

    if (!this.props.projects.fetched) {
      return <div>Loading...</div>
    }

    let technology = "javascript";

    if (this.props.params.technology !== undefined) {
      technology = this.props.params.technology.toLowerCase();
    }

    let filteredProjects = this.props.projects.data.projects;

    if (technology === "more") {
      filteredProjects = _.filter(filteredProjects, (project) => {
        let valid = true;

        _.each(["javascript", "unity", "igaming"], (tech) => {
          if (project.tech.toLowerCase().indexOf(tech) > -1) {
            valid = false;
            return false;
          }
        });

        return valid;
      });
    } else {
      filteredProjects = _.filter(filteredProjects, (project) => {
        return project.tech.toLowerCase().indexOf(technology) > -1;
      });
    }

    const projectElements = _.map(filteredProjects, (project) => {
      return <ProjectPreview key={project.name} name={project.name} thumb={project.thumb} tech={project.tech}
                             description={project.description}/>
    });

    return (
      <div>
        {projectElements}
      </div>
    );
  }
}
