import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchPost} from '../actions/posts';

class PostList extends Component {
    componentDidMount() {
        const {match} = this.props;
        if (match.params.category) {
            this.props.getPostsCategory(match.params.category)
        }else{
            this.props.fetchPosts();
        }

    }
    renderPosts({allIds, byId}) {
        const {fetchPost} = this.props;
        return allIds.map((post) => {
            return (
               
                    <li   key={byId[post].id} className="list-group-item">
                        <Link to={`/${byId[post].category}/${byId[post].id}`}>
                            <h3 className="list-group item heading">{byId[post].title}</h3>
                            <h4>posted by {byId[post].author}</h4>
                            <h5>{byId[post].voteScore} votes </h5>
                        </Link>
                    </li>

            )
        })
    }

    render() {
        const { loading, error, ...rest,} = this.props.posts;
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {loading ? <p>LOADING...</p> : this.renderPosts({...rest})}
                </ul>
            </div>
        )
    }

}
 
export default connect(null,{fetchPost})(PostList); 