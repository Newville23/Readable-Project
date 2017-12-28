import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComment, editComment } from '../actions/comments'
import CommentEditForm from '../components/CommentEditForm'

class CommentEditContainer extends Component {
    componentDidMount() {
        const { id, fetchComment } = this.props;
        fetchComment(id);
    }
    render() {
        const { loading } = this.props.comments;
        return(
            <div>
                { loading ? <p>LOADING...</p> : <CommentEditForm {...this.props}/>}
            </div>
        )
    }
}
const mapStateToProps = ({comments,}) => {
    return {
        comments, 
    };
}
export default connect(mapStateToProps,{ fetchComment, editComment, })(CommentEditContainer);