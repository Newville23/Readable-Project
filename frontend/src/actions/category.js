import * as ReadableAPI from '../utils/api'

//Category List 
export const FETCH_CATEGORIES  = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS  = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE  = 'FETCH_CATEGORIES_FAILURE'
export const FETCH_CATEGORIES_RESET  = 'FETCH_CATEGORIES_RESET'
const ERROR_MESSAGE = 'Sorry! we could not finished the action try again'

//Category List Action Creators 
export function getCategories() {
    const request = ReadableAPI.fetchCategories()
    return (dispatch) => {
        dispatch({type: FETCH_CATEGORIES})
        request.then((response) => {
            dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: response})
        })
        .catch(() => {
            dispatch({type: FETCH_CATEGORIES_FAILURE, payload: ERROR_MESSAGE})
        })
    }
}

