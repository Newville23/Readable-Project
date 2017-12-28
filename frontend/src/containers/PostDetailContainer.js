import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, votePost } from '../actions/posts';
import { fetchComments, voteCommentPost, deleteCommentPost, createCommentPost } from '../actions/comments';
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
                <CommentList 
                    comments={this.props.comments} 
                    deleteComment={this.props.deleteCommentPost} 
                    voteComment={this.props.voteCommentPost}
                    {...this.props}
                />
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
export default connect(mapStateToProps,{ fetchPost, votePost, fetchComments, voteCommentPost, deleteCommentPost, createCommentPost, })(PostDetailContainer);