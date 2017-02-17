import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aboutAction from '../../actions/aboutActions';
import AboutPost from './AboutPost';
import {browserHistory} from 'react-router';


class AboutPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({about: Object.assign([], nextProps.about)});
  }

  render() {
    const {about} = this.props

    return (
      <AboutPost about={about}/>
    )
  }
}


AboutPage.propTypes = {
  about: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

AboutPage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    about: state.about
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(aboutAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
