import React, {Component} from 'react';
import CommentEditContainer from '../containers/CommentEditContainer';

class CommentEdit extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="container">
                <h1>Edit Comment</h1>
                <CommentEditContainer id={match.params.commentId} />
            </div>
        )
    }
}

export default CommentEdit;