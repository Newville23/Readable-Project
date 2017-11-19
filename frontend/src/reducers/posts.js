import {
    FETCH_POST,
    FETCH_POSTS,
    VOTE_POST,
    CREATE_POST,
    DELETE_POST,
    EDIT_POST
} from '../actions/posts'

const post = ( state = [], action ) => {
    const { payload } = action
    switch (action.type) {
        case FETCH_POST:

        case FETCH_POSTS:

        case VOTE_POST:

        case CREATE_POST:
            
        case DELETE_POST:
        
        case EDIT_POST:
    
        default:
            return state
    }
}