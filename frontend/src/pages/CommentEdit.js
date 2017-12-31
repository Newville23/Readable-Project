import React, {Component} from 'react';
import CommentEditContainer from '../containers/CommentEditContainer';

class CommentEdit extends Component {
    render() {
        const { match, history } = this.props;
        return (
            <div className="container">
             <h1 className="page-title" > <span className="page-sub">Edit Comment</span></h1>
                <CommentEditContainer id={match.params.commentId} goBack={history.goBack} />
            </div>
        )
    }
}

export default CommentEdit;