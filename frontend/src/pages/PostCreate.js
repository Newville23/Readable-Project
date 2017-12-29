import React, { Component } from 'react';
import CategoryList from '../containers/CategoryList';
import PostFormContainer from '../containers/PostFormContainer';

class PostCreate extends Component {
    render () {
        const {history} = this.props;
        return(
            <div className="container">
                <h1>
                   Add Post
                </h1>    
                <CategoryList/>
                <PostFormContainer goBack={history.goBack}/>
            </div>
        )
    }
}

export default PostCreate;