import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import CategoryList from '../containers/CategoryList';
import PostList from '../components/PostList';

class Home extends Component {
    render () {
        return(
            <div className="container">
                <CategoryList {...this.props}/>
                <PostList {...this.props}/> 
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