import * as ReadableAPI from './utils/api'

//Category List 
export const FETCH_CATEGORIES  = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS  = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE  = 'FETCH_CATEGORIES_FAILURE'
export const FETCH_CATEGORIES_RESET  = 'FETCH_CATEGORIES_RESET'

//Category List Action Creators 
export function getCategories() {
    const request = ReadableAPI.fetchCategories()
    return {
        type: FETCH_CATEGORIES,
        payload: request,
    }
}

export function getCategoriesSuccess(categories) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories,
    }
}

export function getCategoriesFailure(err) {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: err,
    }
}


