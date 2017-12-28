import {
    FETCH_COMMENT, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE,
    FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
    CREATE_COMMENT, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE,
    DELETE_COMMENT, DELETE_COMMENT_SUCCCESS, DELETE_COMMENT_FAILURE,
    EDIT_COMMENT_POST, EDIT_COMMENT_POST_SUCCESS, EDIT_COMMENT_POST_FAILURE,
    VOTE_COMMENT_POST, VOTE_COMMENT_POST_SUCCESS, VOTE_COMMENT_POST_FAILURE,
} from '../actions/comments';

const INITIAL_STATE = {
    byId: {}, error: null, loading: false, allIds: [],
};  

const commentsNormalization = (state, action) => {
    const { payload } = action;
    const { byId, allIds } = state;
    const commentsById = payload.reduce((tally, current) => {
        tally[current.id] = {...current};
        return tally;
    }, {});
    const commentAllIds = payload.map((comment) => comment.id);
    return {
        ...state,
        byId: commentsById,
        allIds: commentAllIds,
    } 
}

const comments = (state = INITIAL_STATE, action ) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_COMMENT: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                byId: {
                    [payload.id]: {
                        ...payload,
                    }
                },
                allIds: [payload.id],
            }
        case FETCH_COMMENTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENTS_SUCCESS: 
            return commentsNormalization(state, action);
        case VOTE_COMMENT_POST_SUCCESS: 
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
        case DELETE_COMMENT_SUCCCESS:
            return{
                ...state,
                byId: {
                    ...state.byId,
                    [payload.id]: {
                        ...payload,
                    }
                }

            }    
        default:
            return state;
    }
  
}

export default comments; 