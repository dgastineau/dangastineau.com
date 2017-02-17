import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const HeroPostContainer = ({post}) => {

  return (
    <div className="heroPostArticle" >
      <Link className="link" to={'/post/' + post.slug}>
        <div className="heroPostHeadline linkMouseOver" key="1" >{post.title}</div>
      </Link>
      <div className="heroPostImgDiv" >
        <Link to={'/post/' + post.slug}>
          <img className="img" src={post.heroImage.fields.file.url} />
        </Link>
      </div>
      <div className="text">  
        <p className="content" >{post.excerpt}</p>
        <Link className="link" to={'/post/' + post.slug}>
          <div className="readMore linkMouseOver" key="2" >read more ></div>
        </Link>
      </div>
      <div className="divider"/>
    </div>
  )
}

HeroPostContainer.propTypes = {
  post: PropTypes.object.isRequired
};

export default HeroPostContainer
