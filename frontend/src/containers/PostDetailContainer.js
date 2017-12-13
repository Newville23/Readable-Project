import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, votePost } from '../actions/posts';
import PostDetails from '../components/PostDetails';

class PostDetailContainer extends Component {
    componentDidMount() {
        const {fetchPost} = this.props;
        fetchPost(this.props.id);
    }

    render () {
        return(
            <div className="container">
                <PostDetails {...this.props}/> 
            </div>
        )
    }
}

const mapStateToProps = ({posts,}) => {
    return {
        posts,
    };
}
export default connect(mapStateToProps,{ fetchPost, votePost })(PostDetailContainer);