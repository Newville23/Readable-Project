import React, { Component } from 'react';

class PostList extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts({allIds, byId}) {
        return allIds.map((post) => {
            return (
                <li key={byId[post].id} className="list-group-item">
                    <h3 className="list-group item heading">{byId[post].title}</h3>
                    <h4>{byId[post].author}</h4>
                    <h5>{byId[post].voteScore}</h5>
                </li>
            )
        })
    }

    render() {
        const { loading, error, ...rest,} = this.props.posts;
        if(loading) {
            return <div><h1>Posts</h1><h3>Loading...</h3></div>
        }
        return (
            <div className="container">
                <h1>Posts</h1>
                <ul>
                    {this.renderPosts({...rest})}
                </ul>
            </div>
        )
    }

}

export default PostList; 