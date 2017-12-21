import React, { Component } from 'react';
import CategoryList from '../containers/CategoryList';
import PostFormContainer from '../containers/PostFormContainer';

class PostCreate extends Component {
    
    render () {
        return(
            <div className="container">
                <h1>
                   Add Post
                </h1>    
                <CategoryList/>
                <PostFormContainer/>
            </div>
        )
    }
}

export default PostCreate;