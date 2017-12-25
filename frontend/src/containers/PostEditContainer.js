import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost, fetchPost } from '../actions/posts';
import PostEditForm from '../components/PostEditForm';

class PostEditContainer extends Component {
    componentDidMount() {
        const { id, fetchPost} = this.props;
        fetchPost(id);
    }
    render () {
        const {allIds, loading} = this.props.posts;
        return (
            <div>
                { loading ? <p>LOADING...</p> : <PostEditForm {...this.props}/>}
            </div>
        )
    }
}
const mapStateToProps = ({posts,}) => {
    return {
        posts,
    };
} 
export default connect(mapStateToProps,{ editPost, fetchPost,})(PostEditContainer);