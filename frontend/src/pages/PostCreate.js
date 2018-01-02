import React, { Component } from 'react';
import CategoryList from '../containers/CategoryList';
import PostFormContainer from '../containers/PostFormContainer';

class PostCreate extends Component {
    render () {
        const {history} = this.props;
        return(
            <div className="container">
                <h1 className="page-title" > <span className="page-sub"> Add Post</span></h1> 
                <CategoryList/>
                <PostFormContainer goBack={history.goBack} push= {history.push}/>
            </div>
        )
    }
}

export default PostCreate;