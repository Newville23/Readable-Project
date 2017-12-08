import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';

const PostShow = (props) => {
    return(
       <PostDetailContainer id={props.match.params.postId}/>
    )
}

export default PostShow;