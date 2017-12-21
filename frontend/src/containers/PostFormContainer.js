import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createPost} from '../actions/posts';
import PostForm from '../components/PostForm';

class PostFormContainer extends Component {
    render () {
        return (
            <PostForm {...this.props}/>
        )
    }
}

export default connect(null,{createPost,})(PostFormContainer);