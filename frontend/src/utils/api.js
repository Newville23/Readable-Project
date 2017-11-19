

const api = "http://localhost:3001"


// Generate a unique token for storing your own data.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//Get all of the categories available for the app
export const getCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

    export const getAllPosts = () => 
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)