import * as ReadableAPI from '../utils/api';

//COMMENT List 
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE'
export const COMMENTS_RESET = 'COMMENTS_RESET'

//Create COMMENT 
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE'
export const CREATE_COMMENT_RESET = 'CREATE_COMMENT_RESET'

//Delete COMMENT
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_COMMENT_SUCCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'
export const DELETE_COMMENT_RESET = 'DELETE_COMMENT_RESET'

//Edit COMMENT
export const EDIT_COMMENT_POST = 'EDIT_COMMENT_POST'
export const EDIT_COMMENT_POST_SUCCESS = 'EDIT_COMMENT_POST_SUCCESS'
export const EDIT_COMMENT_POST_FAILURE = 'EDIT_COMMENT_POST_FAILURE'
export const EDIT_COMMENT_POST_RESET = 'EDIT_COMMENT_POST_RESET'

//Vote COMMENT_POST
export const VOTE_COMMENT_POST = 'VOTE_COMMENT_POST'
export const VOTE_COMMENT_POST_SUCCESS = 'VOTE_COMMENT_POST_SUCCESS'
export const VOTE_COMMENT_POST_FAILURE = 'VOTE_COMMENT_POST_FAILURE'
export const VOTE_COMMENT_POST_RESET = 'VOTE_COMMENT_POST_RESET'

//Get all comments of a post Action creator
export function fetchComments(postId) {
    const request = ReadableAPI.fetchComments(postId)
    return {
        type: FETCH_COMMENTS,
        payload: request,
    }
}

export function fetchCommentsSuccess(comments) {
    return  {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments,
    }
}

export function fetchCommentFailure(err) {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: err,
    }
}

//Create Comment Action Creator
export function createCommentPost(option, postId) {
    const request = ReadableAPI.addCommentPost(option, postId)
    return {
        type: CREATE_COMMENT,
        payload: request,
    }
}

export function createCommentPostSuccess(addedComment) {
    return {
        type: CREATE_COMMENT_SUCCESS,
        payload: addedComment,
    }
}

export function createCommentPostFailure(err) {
    return {
        type: CREATE_COMMENT_FAILURE,
        payload: err,
    }
}

//Delete Comment Action Creator 
export function deleteCommentPost(commentId) {
    const request = ReadableAPI.deleteComment(commentId)
    return {
        type: DELETE_COMMENT,
        payload: request,
    }
}

export function deleteCommentPostSuccess(deletedComment) {    
    return {
        type: DELETE_COMMENT_SUCCCESS,
        payload: deletedComment,
    }
}

export function deleteCommentPostFailure(err) {    
    return {
        type: DELETE_COMMENT_FAILURE,
        payload: err,
    }
}

//Edit Comment Action Creator 
export function  editComment(commentId) {
    const request = ReadableAPI.putComment
    return {
        type: EDIT_COMMENT_POST,
        payload: request,
    } 
}

export function  editCommentSuccess(editedComment) {
    return {
        type: EDIT_COMMENT_POST,
        payload: editedComment,
    } 
}

export function editCommmentFailure(err) {
    return {
        type: EDIT_COMMENT_POST_FAILURE,
        payload: err,
    }
}

//Vote Comment in a Post Action Creator
export function voteCommentPost(option, commentId) {
    const request = ReadableAPI.voteComment(option, commentId)
    return {
        type: VOTE_COMMENT_POST,
        payload: request,
    }
}

export function voteCommentPostSuccess(votedComment) {
    return {
        type: VOTE_COMMENT_POST_SUCCESS,
        payload: votedComment,
    }
}

export function voteCommentPostFailure(err) {
    return {
        type: VOTE_COMMENT_POST_FAILURE,
        payload: err,
    }
}