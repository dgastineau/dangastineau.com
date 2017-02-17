import React, {PropTypes} from 'react';
import PostContainer from './PostContainer';
import HeroPostContainer from './HeroPostContainer'


const postId = '2wKn6yEnZewu2SCCkus4as'

const PostSection = ({posts}) => {
  const heroPost = posts.filter(post => post.fields.id == 1 && post.sys.contentType.sys.id == postId);
  const otherPosts = posts.filter(post => post.fields.id != 1
                                  && post.sys.contentType.sys.id == postId)

  return (
    <div className="postSection">
      { heroPost.map(post =>
        <HeroPostContainer key={post.fields.slug} post={post.fields}/>
      )}
      { otherPosts.length > 0 ?
          otherPosts.map(post =>
            <PostContainer key={post.fields.slug} post={post.fields}/>
          ) : null
      }
    </div>
  );
};

PostSection.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostSection;

