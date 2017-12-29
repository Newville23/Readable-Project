import React from 'react';
import {connect} from 'react-redux'
import { getPostsCategory } from '../actions/posts';
import PostDetailContainer from '../containers/PostDetailContainer';
import CategoryList from '../containers/CategoryList';

const PostShow = (props) => {
    return(
        <div className="container">
            <CategoryList {...this.props}/>
            <PostDetailContainer id={props.match.params.postId} goBack={props.history.goBack}/>
        </div>
    )
}

export default connect(null,{getPostsCategory,})(PostShow);