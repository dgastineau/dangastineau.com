import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const PostContainer = ({post}) => {
  return (
    <div>
      <div className="postContainer" >
        <div className="postImgDiv" >
          <Link to={'/post/' + post.slug}>
            <img className="postImg" src={post.heroImage.fields.file.url}/>
          </Link>
        </div>
        <div className="postArticle" >
          <Link className="postContainerHeadline linkMouseOver" to={'/post/' + post.slug}>{post.title}</Link>
          <p className="postContainerContent" >{post.excerpt}</p>
          <Link className="readMore linkMouseOver" to={'/post/' + post.slug}>read more ></Link>
        </div>
      </div>
      <div className="divider"/>
    </div>
  )
}

PostContainer.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostContainer
