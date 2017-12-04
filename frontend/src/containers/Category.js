import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostsCategory } from '../actions/posts';
import CategoriesList from '../components/CategoriesList';
import PostList from '../components/PostListPresentational';

class Category extends Component {
    
    componentDidMount() {
        const { getPostsCategory, match } = this.props
        getPostsCategory(match.params.category)
    }
    render () {
        return(
            <div className="container">
                { <CategoriesList {...this.props}/> }
                { <PostList {...this.props}/> }
             </div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    return {
        posts,
    };
}
export default connect(mapStateToProps,{ getPostsCategory })(Category);