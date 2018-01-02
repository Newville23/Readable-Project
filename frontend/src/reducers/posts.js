import {
    FETCH_POSTS_CATEGORY, FETCH_POSTS_CATEGORY_SUCCESS, FETCH_POSTS_CATEGORY_FAILURE, FETCH_POSTS_CATEGORY_RESET, 
    FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, SELECT_POSTS_RESET,
    FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, SELECT_POST_RESET,
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_RESET,
    DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_RESET,
    EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE, EDIT_POST_RESET,
    VOTE_POST, VOTE_POST_SUCCESS, VOTE_POST_FAILURE, VOTE_POST_RESET,
} from '../actions/posts';
import { VOTE_COMMENT_POST_SUCCESS } from '../actions/comments';

const INITIAL_STATE = {
    byId: {}, error: null, loading: false, allIds: [],
};

const postNormalization = (state, action) => {
    const { payload } = action;
    const {byId, allIds} = state;
    const postById = payload.reduce((tally, current) => {
        tally[current.id] = { ...current };
        return tally;
    }, {});
    const postAllIds = payload.map((post) => post.id );
    return {
        ...state,
        byId: postById,
        allIds: postAllIds,
        loading: false,
        error: null,
    }
}

const posts = ( state = INITIAL_STATE, action ) => {
    let error;
    const { payload } = action
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POSTS_SUCCESS:
            return postNormalization(state, action);
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: payload,
            }
        case FETCH_POSTS_CATEGORY: 
            return {
                ...state,
                byId: {},
                loading: true,
                allIds: [],
            }
        case FETCH_POSTS_CATEGORY_SUCCESS:
            return postNormalization(state, action); 
        case FETCH_POST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POST_FAILURE:
            return {
                ...state,
                error: payload,
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                byId: {
                    [payload.id]: {
                        ...payload,
                    } 
                }, 
                allIds: [payload.id]
            }
        case VOTE_POST_SUCCESS: 
            return {
                ...state,
                loading: false,
                byId: {
                    ...state.byId,
                    [payload.id]: {
                        ...payload,
                    }
                }
            }
            case DELETE_POST_SUCCESS:
            return {
                ...state, 
                byId: {
                    ...state.byId,
                    [payload.id]: {
                        ...payload,
                    }
                }
            }           
        default:
            return state
    }
}

export default posts;