import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, votePost, deletePost } from '../actions/posts';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDownVote from 'material-ui/svg-icons/action/thumb-down';
import ActionUpVote from 'material-ui/svg-icons/action/thumb-up';

class PostList extends Component {
    state = {
        sortType: 'title',
    }

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
    handleOnChange = name => event => {
        const target = event.target;
        const value = target.innerHTML;
        this.setState({
            [name]: value,
        })
    }

    renderPosts({ allIds, byId }) {
        const { fetchPost, votePost, deletePost } = this.props;
        const type = this.state.sortType;

        const postListed = allIds.map((post) => {
            return { ...byId[post] }
        }).sort((a, b) => {
            const vote = 'vote';
            const title = 'title';
            switch (type) {
                case vote: 
                    const voteA = a.voteScore;
                    const voteB = b.voteScore;
                    if (voteA < voteB) {
                        return 1;
                    }
                    if (voteA > voteB) {
                        return -1;
                    }
                    return 0;
                case title:
                    const titleA = a.title;
                    const titleB = b.title;
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                default:
                    const dateA = a.timestamp;
                    const dateB = b.timestamp;
                    if (a.timestamp < b.timestamp){
                        return 1;
                    }
                    if (a.timestamp > b.timestamp){
                        return -1;
                    }
                    return 0;
            }
        });
        return postListed.map((post) => {
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={`/${post.category}/${post.id}`}>
                        <h3 className="list-group item heading">{post.title}</h3>
                    </Link>
                    <h4>posted by {post.author}</h4>
                    <ul className="post-listed-actions">
                        <li>
                            <p>
                                {post.commentCount} Comments
                        </p>
                        </li>
                        <li>
                            <p>
                                {post.voteScore} votes
                                </p>

                        </li>
                        <li>
                            <IconButton tooltip="Vote Down" onClick={() => votePost("downVote", post.id)}>
                                <ActionDownVote />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton tooltip="Vote Up" onClick={() => votePost("upVote", post.id)}>
                                <ActionUpVote />
                            </IconButton>
                        </li>

                        <li>
                            <Link to={`/${post.category}/${post.id}/edit`}>
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
                <div>
                    <DropDownMenu value={this.state.sortType} onChange={this.handleOnChange('sortType')}>
                        <MenuItem key="title" value="title" primaryText="title"/>
                        <MenuItem key="date" value="date" primaryText="date"/>
                        <MenuItem key="vote" value="vote" primaryText="vote"/>
                    </DropDownMenu>
                </div>
                <ul>
                    {loading ? <p>LOADING...</p> : this.renderPosts({ ...rest })}
                </ul>
            </div>
        )
    }

}

export default connect(null, { fetchPost, votePost, deletePost })(PostList); 