import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionComment from 'material-ui/svg-icons/editor/mode-comment';
import ActionDownVote from 'material-ui/svg-icons/action/thumb-down';
import ActionUpVote from 'material-ui/svg-icons/action/thumb-up';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class PostDetails extends Component {

    state = {
        author: '',
        body: '',
        authorValid: false,
        bodyValid: false,
        formValid: false,
        authorError: '',
        bodyError: '',
    };
    formValid = () => {
        if(this.state.bodyValid && this.state.authorValid){
            this.setState({formValid: true,})
        }
    }
    validateField = (name, value) => {
        let formValid = this.state.formValid;
        if (value.length >= 2){
            this.setState({[`${name}Valid`]: true, [`${name}Error`]: ''}, () => {this.formValid()})
        }
    }
    handleOnChange = name => event => {
        const target = event.target;
        const value = target.value;
        this.setState({
            [name]: value,
        }, () => {this.validateField(name, value)});
    }
    handleSubmit = () => {
        const { createCommentPost, id, fetchPost } = this.props;
        const {authorValid, bodyValid } = this.state;
        if(this.state.formValid){
            createCommentPost(this.state, id );
            fetchPost(id);
            this.setState({
                author: '',
                body: '',
                formValid: false,
                authorValid: false,
                bodyValid: false,
            });
        }else{
            if(!authorValid){
                this.setState({
                    authorError: 'This Field is required',
                   })
            }if (!bodyValid) {
                this.setState({
                    bodyError: 'This Field is required',
                   })  
            }
        }
    }
    handleDel = (postId) => {
        const { deletePost, goBack } = this.props;
        deletePost(postId);
        goBack();
    }
    render() {
        const { allIds, byId, } = this.props.posts;
        const { votePost } = this.props;
        return (
            <div>
                { 
                    allIds.map((post) => (
                            <Paper className="post-detail-card" zDepth={1} key={byId[post].id}>
                                <h2>{byId[post].title}</h2>
                                <p>{byId[post].body}</p>
                                <p> {byId[post].author}</p>
                                <ul className="post-actionsList">
                                    <li>
                                        <p>{byId[post].commentCount} comments / {byId[post].voteScore} votes</p>
                                    </li>
                                    <li>
                                        <IconButton tooltip="Vote Down" onClick={() => votePost("downVote", byId[post].id)}>
                                            <ActionDownVote />
                                        </IconButton>
                                    </li>
                                    <li>
                                        <IconButton tooltip="Vote Up" onClick={() => votePost("upVote", byId[post].id)}>
                                            <ActionUpVote />
                                        </IconButton>
                                    </li>
                                    <li>
                                        <Link to={`/${byId[post].category}/${byId[post].id}/edit`}>
                                            <IconButton tooltip="Edit">
                                                <ActionEdit />
                                            </IconButton>
                                        </Link>
                                    </li>
                                    <li>
                                        <IconButton tooltip="Delete" onClick={() => this.handleDel(post)}>
                                            <ActionDelete />
                                        </IconButton>
                                    </li>
                                </ul>
                            </Paper>
                    ))
                }
                <div className="comment-form">
                    <h3>
                        <IconButton>
                            <ActionComment />
                        </IconButton>
                        <span>Add a comment</span>
                    </h3>
                    <form className="comment-add-form">
                        <TextField
                            floatingLabelText="Author"
                            onChange={this.handleOnChange('author')}
                            value={this.state.author}
                            name="author"
                            errorText={this.state.authorError}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Body"
                            onChange={this.handleOnChange('body')}
                            value={this.state.body}
                            name="body"
                            errorText={this.state.bodyError}
                        />
                        <RaisedButton label="Add" primary={true} onClick={() => this.handleSubmit()}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostDetails;