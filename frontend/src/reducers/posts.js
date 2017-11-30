import {
    FETCH_POSTS_CATEGORY, FETCH_POSTS_CATEGORY_SUCCESS, FETCH_POSTS_CATEGORY_FAILURE, FETCH_POSTS_CATEGORY_RESET, 
    FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, SELECT_POSTS_RESET,
    FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, SELECT_POST_RESET,
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_RESET,
    DELETE_POST, DELETE_POST_SUCCCESS, DELETE_POST_FAILURE, DELETE_POST_RESET,
    EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE, EDIT_POST_RESET,
    VOTE_POST, VOTE_POST_SUCCESS, VOTE_POST_FAILURE, VOTE_POST_RESET,
} from '../actions/posts';

const INITIAL_STATE = {
    byId: {}, error: null, loading: false, allIds: [],
    // newPost: {post: null, error: null, loading: false},
    // activePost: {post: null, error: null, loading: false},
    // deletePost: {post: null, error: null, loading: false}, 
};

const postNormalization = (state, action) => {
    const { payload } = action;
    const {byId, allIds} = state;
    const postById = payload.reduce((tally, current) => {
        tally[current.id] = { ...current }
        return tally;
    }, {});
    const postAllIds = payload.map((post) => post.id );
    return {
        ...state,
        byId : postById,
        allIds : postAllIds
    }
}

const posts = ( state = INITIAL_STATE, action ) => {
    let error;
    const { payload } = action
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                postList: {
                    ...state.postList,
                    loading: true,
                }
            }
        case FETCH_POSTS_SUCCESS:
            return postNormalization(state, action);
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                postList: {
                    posts: null,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default posts;