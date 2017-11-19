import * as ReadableAPI from './utils/api'

export const FETCH_POST = 'FETCH_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const VOTE_POST = 'VOTE_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export function createPost(post) {
    return {
        type: CREATE_POST,
        post
    }
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        postId
    }
}

export function editPost(postId) {
    return {
        type: EDIT_POST,
        postId
    }
}
