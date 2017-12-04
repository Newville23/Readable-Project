import React, { Component } from 'react';

class PostList extends Component {

    renderPosts({allIds, byId}) {
        return allIds.map((post) => {
            return (
                <li key={byId[post].id} className="list-group-item">
                    <h3 className="list-group item heading">{byId[post].title}</h3>
                    <h4>posted by {byId[post].author}</h4>
                    <h5>votes {byId[post].voteScore}</h5>
                </li>
            )
        })
    }

    render() {
        const { loading, error, ...rest,} = this.props.posts;
        return (
            <div className="container">
                <h1>Posts</h1>
                <ul>
                    {loading ? <p>LOADING...</p> : this.renderPosts({...rest})}
                </ul>
            </div>
        )
    }

}

export default PostList; 