import * as ReadableAPI from '../utils/api'

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
export const DELETE_POST_SUCCCESS = 'DELETE_POST_SUCCESS'
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

// //Posts Category
// export function getPostsCategory(Category) {
//     const request = ReadableAPI.fetchCategoryPosts(category)
//     return {
//         type: FETCH_POSTS_CATEGORY,
//         payload: request,
//     }
// }

// export function getPostsCategorySuccess(posts) {
//     return {
//         type: FETCH_POSTS_CATEGORY_SUCCESS,
//         payload: posts,
//     }
// }

// export function getPostsCategoryFailure() {
//     return {
//         type: FETCH_POSTS_CATEGORY_FAILURE,
//         payload: posts,
//     }
// }
//Post List Action Creator
// export function fetchPosts() {
//     const request = ReadableAPI.fetchAllPosts()
//     return {
//         type: FETCH_POSTS,
//         payload: request,
//     }
// }
export function fetchPosts() {
    const request = ReadableAPI.fetchAllPosts()
    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: FETCH_POSTS,
                payload: response,
            })
        })
    }
}
export function fetchPostsSuccess(posts) {
    return{
        type: FETCH_POSTS_SUCCESS,
        payload: posts,
    }
}

export function fetchPostsFailure(err) {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: err,
    }
}

// //Post Details Action Creator
// export function fetchPost(postId) {
//     const request = ReadableAPI.fetchPost(postId)
//     return {
//         type: FETCH_POST,
//         payload: request,
//     }
// }

// export function fetchPostSuccess(post) {
//     return {
//         type: FETCH_POST_SUCCESS,
//         payload: post,
//     }
// }

// export function fetchPostFailure(err) {
//     return {
//         type: FETCH_POST_FAILURE,
//         payload: err,
//     }
// }

// //Create Post Action Creator
// export function createPost(option) {
//     option.id = postId
//     option.delete = false
//     option.timeStamp = Date.now()
//     const request = ReadableAPI.addPost(option)
//     return {
//         type: CREATE_POST,
//         payload: request,
//     }
// }

// export function createPostSuccess(newPost) {
//     return {
//         type: CREATE_POST_SUCCESS,
//         payload: newPost,
//     }
// }

// export function createPostFailure(err) {
//     return {
//         type: CREATE_POST_FAILURE,
//         payload: err,
//     }
// }

// //Delete Post Action Creator
// export function deletePost(postId) {
//     const request = ReadableAPI.deletePost(postId)
//     return {
//         type: DELETE_POST,
//         payload: request
//     }
// }

// export function deletePostSuccess(deletedPost) {
//     return {
//         type: DELETE_POST_SUCCCESS,
//         payload: deletedPost
//     }
// }

// export function deletePostFailure(err) {
//     return {
//         type: DELETE_POST_FAILURE,
//         payload: err
//     }
// }
// //Edit Post Action Creator
// export function editPost(option, postId) {
//     const request = ReadableAPI.putPost(option, postId)
//     return {
//         type: EDIT_POST,
//         payload: request,
//     }
// }

// export function editPostSuccess(editedPost) {
//     return {
//         type: EDIT_POST_SUCCESS,
//         payload: editedPost,
//     }
// } 

// export function editPostFailure(err) {
//     return {
//         type: EDIT_POST_FAILURE,
//         payload: err
//     }
// }
// //Vote Post Action Creator
// export function votePost(option, postId) {
//     const request = ReadableAPI.votePost(option, postId)
//     return {
//         type: VOTE_POST,
//         payload: request,
//     }
// }

// export function votePostSuccess(votedPost) {
//     return {
//         type: VOTE_POST_SUCCESS,
//         payload: votedPost,
//     }
// }

// export function votePostFailure(err) {
//     return {
//         type: VOTE_POST_FAILURE,
//         payload: err,
//     }
// }