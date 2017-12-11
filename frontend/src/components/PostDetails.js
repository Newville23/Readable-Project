import React from 'react';

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
                    </div>
               ))
            }
        </div>
    )
}

export default PostDetails;