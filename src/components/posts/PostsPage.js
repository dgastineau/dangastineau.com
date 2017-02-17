import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postAction from '../../actions/postActions';
import PostSection from './PostSection';
import {browserHistory} from 'react-router';

class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {posts} = this.props

    return (
      <PostSection posts={posts}/>
    )
  }
}


PostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)
