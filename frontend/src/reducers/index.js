import posts from './posts';
import comments from './comments';
import categories from './categories';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
   categories, posts, comments, routing: routerReducer,
});
