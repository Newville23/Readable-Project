import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import CategoryList from '../containers/CategoryList';
import PostList from '../components/PostList';

class Home extends Component {
    componentDidMount() {
        const {fetchPosts} = this.props;
        fetchPosts();
    }
    render () {
        return(
            <div>
            <div className="container">
                {<CategoryList {...this.props}/>}
                { <PostList {...this.props}/> }
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({posts,}) => {
    return {
        posts,
    };
}
export default connect(mapStateToProps,{ fetchPosts })(Home);
