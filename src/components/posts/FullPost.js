import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../../actions/postActions';
import showdown from 'showdown'


class SinglePostPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: Object.assign({}, props.post),
      errors: {}
    };
    
    this.md = this.md.bind(this)
    this.dateFormat = this.dateFormat.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.fields.slug != nextProps.post.fields.slug) {
      // necessary to populate form when existing post is loaded directly
      this.setState({post: Object.assign({}, nextProps.post)})
    }
  }
  
  md(text) {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    return {__html: html}
  }

  dateFormat(dateStr) {
    let date = new Date(dateStr)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December']
    let monthIndex = date.getMonth()
    let year = date.getFullYear()
    let day = date.getDate()
    return monthNames[monthIndex] + ' ' + day + ', ' + year
  }

  render() {
    const {post} = this.props
    
    return (
      <div className="fullArticle" >
        <p className="postHeadline">{post.fields.title}</p>
        <p className="date">{this.dateFormat(post.fields.date)}</p>
        <div className="fullPostImgDiv" >
          <img className="img" src={post.fields.heroImage.fields.file.url} />
        </div>
        <div className="content postContent" dangerouslySetInnerHTML={this.md(post.fields.body)} />
      </div>
    );
  }
}

SinglePostPage.propTypes = {
  post: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the react router context so router is available on this.context.router
SinglePostPage.contextTypes = {
  router: PropTypes.object
};

function getPostBySlug(posts, slug) {
  const post = posts.filter(post => post.fields.slug == slug);
  if (post.length) return post[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const postSlug = ownProps.params.slug;
  let post = {fields: {
    title: '', 
    date: '', 
    url: '', 
    heroImage: {
      fields: {
        file: {
          url: ''
        }
      }
    }, 
    body: ''
  }
  };
  if (postSlug && state.posts.length > 0) {
    post = getPostBySlug(state.posts, postSlug)
  }
  return { post: post }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(postActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostPage)
