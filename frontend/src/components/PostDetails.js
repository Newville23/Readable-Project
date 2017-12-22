import React from 'react';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionComment from 'material-ui/svg-icons/editor/mode-comment';
import ActionDownVote from 'material-ui/svg-icons/action/thumb-down';
import ActionUpVote from 'material-ui/svg-icons/action/thumb-up';

const PostDetails = (props) => {
    const { allIds, byId } = props.posts;
    const { votePost } = props;
    return (
        <div>
            {
                allIds.map((post) => (
                    <div key={byId[post].id}>
                        <h2>{byId[post].title}</h2>
                        <p>{byId[post].body}</p>
                        <p> {byId[post].author}</p>
                        <ul className="post-actionsList">
                            <li>
                                <p>{byId[post].voteScore} votes</p>
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
                                <IconButton tooltip="Add Comment">
                                    <ActionComment />
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
                                <IconButton tooltip="Delete">
                                    <ActionDelete />
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default PostDetails;