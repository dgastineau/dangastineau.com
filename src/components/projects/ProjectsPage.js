import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectAction from '../../actions/projectActions';
import ProjectsSection from './ProjectsSection';
import {browserHistory} from 'react-router';

class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {projects} = this.props

    return (
      <ProjectsSection projects={projects}/>
    )
  }
}


ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage)
