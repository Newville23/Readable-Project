
const api = "http://localhost:3001"


// Generate a unique token for storing your own data.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json',
}

//Get all of the categories available for the app
export const fetchCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

//Get all of the posts for a particular category
export const fetchCategoryPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)   

//Get all of the posts
export const fetchAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

//Add new post 
export const addPost = (post) =>
  fetch(`${api}/posts`, { method: 'POST', headers, body: JSON.stringify(post) })
    .then(res => res.json())
    .then(data => data)    

//Get the details of a single post  
export const fetchPost = (postId) => 
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

//Used for voting on a post  
export const votePost = (option, postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'POST', headers: headers, body: JSON.stringify({option: option}), })
    .then(res => res.json())

//Edit the details of an existing post
export const putPost = (option, postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'PUT', headers, body: JSON.stringify(option) }) 
    .then(res => res.json())

//Sets the deleted flag for a post to 'true'
export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'DELETE', headers}) 
    .then(res => res.json())

//Get all the comments for a single post
export const fetchComments = (postId) => 
  fetch(`${api}/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

//Add a comment to a post
export const addCommentPost = (option, postId) =>
  fetch(`${api}/comments`, { method: 'POST', headers, body: JSON.stringify(option) })
    .then(res => res.json()) 

//Used for voting on a comment
export const voteComment = (option, commentId) =>
  fetch(`${api}/comments/${commentId}`, { method: 'POST', headers, body: JSON.stringify(option) })
    .then(res => res.json())

//Edit the details of an existing comment
export const putComment = (option, commentId) =>
  fetch(`${api}/comments/${commentId}`, { method: 'PUT', headers, body: JSON.stringify(option) })
    .then(res => res.json())

//	Sets a comment's deleted flag to true
export const deleteComment = (commentId) =>
fetch(`${api}/comments/${commentId}`, { method: 'DELETE', headers}) 
  .then(res => res.json())  