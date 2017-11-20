import * as ReadableAPI from './utils/api'

export const FETCH_POST = 'FETCH_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'

export function fetchPost(postId) {
    const request = ReadableAPI.fetchPost(postId) 
    return dispatch => {
        request.then((data) => {
            dispatch({type: FETCH_POST, payload: data})
        })
    }
}

export function fetchPosts() {
    const request = ReadableAPI.fetchPosts()
    return dispatch => {
        request.then((data) => {
            dispatch({type: FETCH_POSTS, payload: data})
        })
    }
}

export function createPost(option) {
    option.id = postId
    option.delete = false
    option.timeStamp = Date.now()
    const request = ReadableAPI.addPost(option)
    return dispatch => {
        request.then((data) => {
            dispatch({type: CREATE_POST, payload: data})
        })
    }
}

export function deletePost(postId) {
   const request = ReadableAPI.deletePost(postId)
   return dispatch => {
       request.then((data) => {
           dispatch({type: DELETE_POST, payload: data})
       })
   }
}

export function editPost(option, postId) {
    const request = ReadableAPI.putPost(option, postId)
    return dispatch => {
        request.then((data) => {
            dispatch({type: EDIT_POST, payload: data})
        })
    }
}

export function votepost(option, postId) {
    const rquest = ReadableAPI.votePost(option, postId)
    return dispatch => {
        request.then((data) => {
            dispatch({type: VOTE_POST, payload: data})
        })
    }
}