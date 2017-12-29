import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, votePost, deletePost } from '../actions/posts';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDownVote from 'material-ui/svg-icons/action/thumb-down';
import ActionUpVote from 'material-ui/svg-icons/action/thumb-up';

class PostList extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match.params.category) {
            this.props.getPostsCategory(match.params.category)
        } else {
            this.props.fetchPosts();
        }
    }
    handleDel = (postId) => {
        const {deletePost} = this.props;
        deletePost(postId);
        const { match } = this.props;
        if (match.params.category) {
            this.props.getPostsCategory(match.params.category)
        } else {
            this.props.fetchPosts();
        }
    }
    renderPosts({ allIds, byId }) {
        const { fetchPost, votePost, deletePost } = this.props;
        return allIds.map((post) => {
            return (
                <li key={byId[post].id} className="list-group-item">
                    <Link to={`/${byId[post].category}/${byId[post].id}`}>
                        <h3 className="list-group item heading">{byId[post].title}</h3>
                    </Link>
                    <h4>posted by {byId[post].author}</h4>
                    <ul className="post-listed-actions">
                        <li>
                            <p>
                                {byId[post].commentCount} Comments
                        </p>
                        </li>
                        <li>
                            <p>
                                {byId[post].voteScore} votes
                                </p>

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

                </li>
            )
        })
    }

    render() {
        const { loading, error, ...rest, } = this.props.posts;
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {loading ? <p>LOADING...</p> : this.renderPosts({ ...rest })}
                </ul>
            </div>
        )
    }

}

export default connect(null, { fetchPost, votePost, deletePost })(PostList); 