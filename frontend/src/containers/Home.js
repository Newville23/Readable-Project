import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import CategoriesList from '../components/CategoriesList';
import PostList from '../components/PostListPresentational';

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render () {
        return(
            <div className="container">
                <CategoriesList/>
                { <PostList {...this.props}/> }
             </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    };
}
export default connect(mapStateToProps,{ fetchPosts })(Home);
