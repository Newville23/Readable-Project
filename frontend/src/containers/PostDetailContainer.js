import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/posts';
import PostDetails from '../components/PostDetails';

class PostDetailContainer extends Component {
    render () {
        return(
            <div>
            <div className="container">
                <PostDetails {...this.props}/> 
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({posts,}) => {
    return {
        posts,
    };
}
export default connect(mapStateToProps,{ fetchPost })(PostDetailContainer);