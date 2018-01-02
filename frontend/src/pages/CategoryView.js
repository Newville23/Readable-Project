import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostsCategory } from '../actions/posts';
import CategoryList from '../containers/CategoryList';
import PostList from '../components/PostList';

const CategoryView = (props) => {
    return(
        <div className="container">
            <CategoryList {...props} />
            <PostList {...props} />
        </div>
    )
}

const mapStateToProps = ({posts,}) => {
    return {
        posts,
    };
}
export default connect(mapStateToProps,{ getPostsCategory,})(CategoryView);