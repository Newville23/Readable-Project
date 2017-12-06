import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';

const PostShow = (props) => {
    return(
       <PostDetailContainer id={props.params.id}/>
    )
}

export default PostShow;