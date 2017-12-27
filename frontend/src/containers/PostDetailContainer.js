import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, votePost } from '../actions/posts';
import { fetchComments } from '../actions/comments';
import PostDetails from '../components/PostDetails';
import CommentList from '../components/CommentList';

class PostDetailContainer extends Component {
    componentDidMount() {
        const {fetchPost, fetchComments} = this.props;
        fetchPost(this.props.id);
        fetchComments(this.props.id);
    }

    render () {
        return(
            <div>   
                <PostDetails {...this.props}/> 
                <CommentList comments={this.props.comments}/>
            </div>
        )
    }
}

const mapStateToProps = ({posts, comments}) => {
    return {
        posts,
        comments,
    };
}
export default connect(mapStateToProps,{ fetchPost, votePost, fetchComments })(PostDetailContainer);