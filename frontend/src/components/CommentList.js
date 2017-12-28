import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionComment from 'material-ui/svg-icons/editor/mode-comment';
import ActionDownVote from 'material-ui/svg-icons/action/thumb-down';
import ActionUpVote from 'material-ui/svg-icons/action/thumb-up';

class CommentList extends Component{
    handleDel = (commentId) => {
        const {deleteComment, fetchComments, id} = this.props;
        deleteComment(commentId);
        fetchComments(id);
    }
    render() {
        const {allIds, byId} = this.props.comments;
        const {voteComment} = this.props;
        
        return(
            <div>
                <h3>Comments</h3>
                <ul className="comment-list">
                    {
                        allIds.map((comment) => (
                            <li className="comment-item" key={byId[comment].id}>
                                <ul>
                                    <li>{byId[comment].author}</li>
                                    <li>{byId[comment].body}</li>
                                    <li>
                                        <ul className="action-list">
                                            <li>
                                                {byId[comment].voteScore} votes
                                            </li>
                                            <li>
                                                <IconButton tooltip="Vote Down" onClick={() => voteComment("downVote", byId[comment].id)}>
                                                    <ActionDownVote />
                                                </IconButton>
                                            </li>
                                            <li>
                                                <IconButton tooltip="Vote Up" onClick={() => voteComment("upVote", byId[comment].id)}>
                                                    <ActionUpVote />
                                                </IconButton>
                                            </li>
                                            <li>
                                                <Link to={`/comments/${comment}`}>
                                                    <IconButton tooltip="Edit">
                                                        <ActionEdit />
                                                    </IconButton>
                                                </Link>
                                            </li>
                                            <li>
                                                <IconButton tooltip="Delete" onClick={() => this.handleDel(comment)}>
                                                    <ActionDelete />
                                                </IconButton>
                                            </li>
                                        </ul>
                                    </li>    
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default CommentList;