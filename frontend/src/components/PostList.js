import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, votePost, deletePost } from '../actions/posts';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
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
            let voteA = a.voteScore;
            let voteB = b.voteScore;
            let titleA = a.title;
            let titleB = b.title;
            let dateA = a.timestamp;
            let dateB = b.timestamp;
            const vote = 'vote';
            const title = 'title';
            switch (type) {
                case vote: 
                    if (voteA < voteB) {
                        return 1;
                    }
                    if (voteA > voteB) {
                        return -1;
                    }
                    return 0;
                case title:
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                default:
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
                    <Card>
                        <CardHeader
                            title={ <Link to={`/${post.category}/${post.id}`}>
                                        <h3 className="list-group item heading">{post.title}</h3>
                                    </Link>
                                }
                            subtitle={<span> posted by {post.author} / {post.commentCount} Comments / {post.voteScore} votes</span>}
                        />
                        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
                        <Divider />
                        <CardActions>
                            <IconButton tooltip="Vote Down" onClick={() => votePost("downVote", post.id)}>
                                <ActionDownVote />
                            </IconButton>
                            <IconButton tooltip="Vote Up" onClick={() => votePost("upVote", post.id)}>
                                <ActionUpVote />
                            </IconButton>
                            <Link to={`/${post.category}/${post.id}/edit`}>
                                <IconButton tooltip="Edit">
                                    <ActionEdit />
                                </IconButton>
                            </Link>
                            <IconButton tooltip="Delete" onClick={() => this.handleDel(post.id)}>
                                <ActionDelete />
                            </IconButton>
                        </CardActions>
                    </Card>
                </li>
            )
        })
    }

    render() {
        const { loading, error, ...rest, } = this.props.posts;
        return (
            <div>
                <h1 className="page-title" > <span className="page-sub">Posts</span></h1>
                <div className="sort-wrapper">
                   <span className="sort-label">Sort By </span> 
                    <DropDownMenu value={this.state.sortType} onChange={this.handleOnChange('sortType')}>
                        <MenuItem key="title" value="title" primaryText="title"/>
                        <MenuItem key="date" value="date" primaryText="date"/>
                        <MenuItem key="vote" value="vote" primaryText="vote"/>
                    </DropDownMenu>
                </div>
                <ul className="post-list">
                    {loading ? <p>LOADING...</p> : this.renderPosts({ ...rest })}
                </ul>
            </div>
        )
    }

}

export default connect(null, { fetchPost, votePost, deletePost })(PostList); 