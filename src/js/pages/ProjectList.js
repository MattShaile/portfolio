import React from "react";
import {connect} from "react-redux";

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

    console.log(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {

    if (!this.props.projects.fetched) {
      return <div>Loading...</div>
    }

    const projectElements = this.props.projects.data.projects.map((project) => {
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
