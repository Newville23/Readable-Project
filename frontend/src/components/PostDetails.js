import React from 'react';
import IconButton from 'material-ui/IconButton';

const PostDetails = (props) => {
    const {allIds, byId} = props.posts;
    return (
        <div>
            {
                allIds.map((post) => (
                    <div key={byId[post].id}>
                        <h2>{byId[post].title}</h2>
                        <p>{byId[post].body}</p>
                        <p> {byId[post].author}</p>
                        <p>{byId[post].voteScore} votes</p>
                        <ul className="post-actions">
                            <li>
                                <IconButton iconClassName="muidocs-icon-custom-github" />
                            </li>
                            <li>
                                <IconButton iconClassName="muidocs-icon-custom-github" />
                            </li>
                            <li>
                                <IconButton iconClassName="muidocs-icon-custom-github" />
                            </li>
                            <li>
                                <IconButton iconClassName="muidocs-icon-custom-github" />
                            </li>
                            <li>
                                <IconButton iconClassName="muidocs-icon-custom-github" />
                            </li>
                        </ul>
                    </div>
               ))
            }
        </div>
    )
}

export default PostDetails;