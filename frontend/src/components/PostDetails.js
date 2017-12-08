import React from 'react';

const PostDetails = (props) => {
    const {allIds, byId} = props.posts;
    return (
        <div>
            {
                allIds.map((post) => (
                    <div>
                        <h2>{byId[post].title}</h2>
                        <p>{byId[post].body}</p>
                        <p> {byId[post].author}</p>
                    </div>
               ))
            }
        </div>
    )
}

export default PostDetails;