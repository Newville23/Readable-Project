import { connect } from 'react-redux';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';
import PostList from '../components/PostList';