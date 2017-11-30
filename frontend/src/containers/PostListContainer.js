import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostList from '../components/PostListPresentational';

const mapStateToProps = ({posts}) => {
    return {
        posts
    };
}
export default connect(mapStateToProps,{ fetchPosts })(PostList);