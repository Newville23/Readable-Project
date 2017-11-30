import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostList from '../components/PostListPresentational';

const mapStateToProps = ({posts}) => {
    return {
        posts
    };
}
const mapDispatchToProps = (dispatch) => fetchPosts;

export default connect(mapStateToProps, mapDispatchToProps)(PostList);