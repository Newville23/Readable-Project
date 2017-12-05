import {
    FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE
} from '../actions/category';
const INITIAL_STATE = {
    all: [], error: null, loading: false,
};
const categories = (state = INITIAL_STATE, action ) => {
    const {payload} = action;
    switch (action.type) {
        case FETCH_CATEGORIES:
           return {
               ...state,
               loading: true,
           } 
        case FETCH_CATEGORIES_SUCCESS:    
           return {
               ...state,
               loading: false,
               all: payload,
           }
        default:
            return state;       
    }
}

export default categories; 