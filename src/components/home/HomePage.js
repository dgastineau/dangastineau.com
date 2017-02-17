import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postAction from '../../actions/postActions';
import PostSection from '../posts/PostSection';
import { Email, Linkedin, Twitter, Medium, Tableau } from '../common/Social'


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {posts} = this.props

    return (
      <div>
        <div className="hero" >
          <div className="headshot" >
            <img className="headshotImg" src={require('../common/images/headshot.png')}/>
          </div>
          <div className="about" >
            <p className="aboutText" >Hello, I'm Dan. I'm a data visualization specialist at Aspirent Consulting with a particular focus on Tableau and data analytics. The intersection of science and art in the world of data viz is endlessly fascinating to me, and this site will highlight some of the great work by others and maybe a few things I've learned along the way. Hope you find it interesting.</p>
            <div className="socialDiv" >
              <Email/>
              <Linkedin/>
              <Twitter/>
              <Medium/>
              <Tableau/>
            </div>
          </div>
        </div>
        <PostSection posts={posts}/>
      </div>
    )
  }
}


HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
