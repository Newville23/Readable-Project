import { connect } from 'react-redux';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';
import PostList from '../components/PostListPresentational';

const mapStateToProps = ({posts}) => {
    return {
        posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts()).then((response) => {
                !response.error 
                ? dispatch(fetchPostsSuccess(response.payload.data))
                : dispatch(fetchPostsFailure(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);