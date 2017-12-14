import * as ReadableAPI from '../utils/api';
import cuid from 'cuid';
//Posts By Category
export const FETCH_POSTS_CATEGORY = 'FETCH_POSTS_CATEGORY'
export const FETCH_POSTS_CATEGORY_SUCCESS = 'FETCH_POSTS_CATEGORY_SUCCESS'
export const FETCH_POSTS_CATEGORY_FAILURE = 'FETCH_POSTS_CATEGORY_FAILURE'
export const FETCH_POSTS_CATEGORY_RESET = 'FETCH_POSTS_CATEGORY_RESET'

//Post List 
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const POSTS_RESET = 'POSTS_RESET'

//Post Details
export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POSTS_FAILURE'
export const SELECT_POST_RESET = 'SELECT_POST_RESET'

//Create Post 
export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'
export const CREATE_POST_RESET = 'CREATE_POST_RESET'

//Delete Post
export const DELETE_POST = 'DELETE_POST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'
export const DELETE_POST_RESET = 'DELETE_POST_RESET'

//Edit Post
export const EDIT_POST = 'EDIT_POST'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'
export const EDIT_POST_RESET = 'EDIT_POST_RESET'

//Vote Post
export const VOTE_POST = 'VOTE_POST'
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS'
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE'
export const VOTE_POST_RESET = 'VOTE_POST_RESET'

const ERROR_MESSAGE = 'Sorry! we could not finished the action try again'


//Posts Category
export function getPostsCategory(category) {
    const request = ReadableAPI.fetchCategoryPosts(category)
    return (dispatch) => {
        dispatch({type: FETCH_POSTS_CATEGORY})
        request.then((response) => {
            dispatch({type: FETCH_POSTS_CATEGORY_SUCCESS, payload: response})
        })
        .catch(() => {
            dispatch({type: FETCH_POSTS_CATEGORY_FAILURE, payload: ERROR_MESSAGE})
        })
    }
}

//Post List Action Creator
export function fetchPosts() {
    const request = ReadableAPI.fetchAllPosts()
    return (dispatch) => {
        dispatch({type: FETCH_POSTS})
        request.then((response) => {
            !response.error
            ? dispatch({type:FETCH_POSTS_SUCCESS, payload: response,})
            : dispatch({type: FETCH_POSTS_FAILURE, payload: response,});
        })
    }
}

//Post Details Action Creator
export function fetchPost(postId) {
    const request = ReadableAPI.fetchPost(postId)
    return (dispatch) => {
        request.then((response) => {
            !response.error
            ? dispatch({type: FETCH_POST_SUCCESS, payload: response,})
            : dispatch({type: FETCH_POST_FAILURE, payload: response,})
        })
    }
}

//Create Post Action Creator
export function createPost(option) {
    const postId = cuid()
    option.id = postId
    option.deleted = false
    option.timestamp = Date.now()
    const request = ReadableAPI.addPost(option)
    return (dispatch) => {
        request.then((response) => {
            !response.error
            ? dispatch({type: CREATE_POST_SUCCESS, payload: response,})
            : dispatch({type: CREATE_POST_FAILURE, payload: response,})
        })
    }
}

//Delete Post Action Creator
export function deletePost(postId) {
    const request = ReadableAPI.deletePost(postId);
    return (dispatch) => {
        request.then((response) => {
            console.log(response)
            dispatch({type: DELETE_POST_SUCCESS, payload: response,});
        })
        .catch(() => {
            dispatch({type: DELETE_POST_FAILURE, payload: ERROR_MESSAGE,});
        })
    }
}

//Edit Post Action Creator
export function editPost(option, postId) {
    const request = ReadableAPI.putPost(option, postId)
    return (dispatch) => {
        request.then((response) => {
            dispatch({type: EDIT_POST_SUCCESS, payload: response});
        })
        .catch(() => {
            dispatch({type: EDIT_POST_FAILURE, payload: ERROR_MESSAGE })
        })
    }
}

//Vote Post Action Creator
export function votePost(option, postId) {
    const request = ReadableAPI.votePost(option, postId)
    return (dispatch) => {
        request.then((response) => {
            dispatch({type: VOTE_POST_SUCCESS, payload: response})
        })
        .catch(() => {
            dispatch({type: VOTE_POST_FAILURE, payload: ERROR_MESSAGE})
        })
    }
}
