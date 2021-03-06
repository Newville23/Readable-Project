import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, votePost, deletePost } from '../actions/posts';
import { fetchComments, voteCommentPost, deleteCommentPost, createCommentPost } from '../actions/comments';
import PostDetails from '../components/PostDetails';
import CommentList from '../components/CommentList';
import NoMatch from '../pages/NoMatch';

class PostDetailContainer extends Component {
    componentDidMount() {
        const {fetchPost, fetchComments} = this.props;
        fetchPost(this.props.id);
        fetchComments(this.props.id);
    }

    render () {
        const {error, allIds} = this.props.posts;
        console.log(allIds.length)
        return(
            <div>   
                { error ? (
                    <NoMatch/>
                ) : (
                    <div>
                        { allIds[0] ? (
                            <div>
                                <PostDetails {...this.props}/> 
                                <CommentList 
                                    comments={this.props.comments} 
                                    deleteComment={this.props.deleteCommentPost} 
                                    voteComment={this.props.voteCommentPost}
                                    {...this.props}
                                />
                            </div>
                        ) : (
                            <NoMatch/>
                        )
                        }
                    </div>
                )
                }
            </div>
        )
    }
}

const mapStateToProps = ({posts, comments,}) => {
    return {
        posts,
        comments,
    };
}
export default connect(mapStateToProps,{ fetchPost, votePost, deletePost, fetchComments, voteCommentPost, deleteCommentPost, createCommentPost, })(PostDetailContainer);