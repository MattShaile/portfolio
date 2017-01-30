import React from "react";
import {connect} from "react-redux";

import _ from "lodash";

import Loader from "./Loader";
import store from "../store";
import {fetchProjects} from "../actions/projectsActions";
import {unlockAchievement, viewedProject} from "../actions/achievementActions";

@connect((store) => {
  return {
    store: store,
    projects: store.projects
  };
})
export default class Project extends React.Component {

  constructor() {
    super();

    this.state = {
      project: null
    }
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(this.storeUpdate.bind(this));
    this.props.dispatch(fetchProjects());
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  storeUpdate() {

    const projects = store.getState().projects;

    if (!projects.fetched) {
      this.setState({ project: null });
    } else {

      this.unsubscribe();

      const projectName = this.props.params.project;

      const project = _.find(projects.data.projects, (project) => {
        return project.name.toLowerCase() == projectName;
      });

      this.setState({ project: project });

      // Unlock achievements
      if (project.tech.toLowerCase().includes("unity")) {
        this.props.dispatch(unlockAchievement("Unity"));
      }
      if (project.tech.toLowerCase().includes("javascript")) {
        this.props.dispatch(unlockAchievement("HTML5"));
      }
      if (project.category.toLowerCase().includes("casino")) {
        this.props.dispatch(unlockAchievement("Casino"));
      }
      if (project.tech.toLowerCase().includes("react")) {
        this.props.dispatch(unlockAchievement("React"));
      }

      this.props.dispatch(viewedProject(project.id));
    }
  }

  render() {

    if (!this.state.project) {
      return <Loader />
    }

    return (
      <div>
        <div class="project">

          <div class="title-bg"></div>

          <div class="main-container">
            <h3 class="title">{this.state.project.name}</h3>
            <img class="image" src={this.state.project.image}/>
          </div>
          <div class="copy-container">
            <div class="link-container">
              <p><span class="label">Technologies:</span> <span class="technologies">{this.state.project.tech}</span>
              </p>
              <p><span class="label">Source:</span> <a href={this.state.project.code}>{this.state.project.codeLabel}</a>
              </p>
              <p><span class="label">Demo:</span> <a href={this.state.project.demo}>{this.state.project.demoLabel}</a>
              </p>
            </div>

            <p class="description">
              {this.state.project.description}
            </p>
          </div>

        </div>
      </div>
    );
  }
}
