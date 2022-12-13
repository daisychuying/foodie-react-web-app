import axios from "axios";

const BASE_API_URL = 'http://localhost:4000/api'
// const BASE_API_URL = 'https://foodie-node-server-app.herokuapp.com/api'

export const createPost = async (post) => {
    const response = await axios.post(`${BASE_API_URL}/posts`, post)
    return response.data
}

export const findAllPosts = async () => {
    const response = await axios.get(`${BASE_API_URL}/posts`)
    return response.data
}

export const findPostByID = async (postID) => {
    const response = await axios.get(`${BASE_API_URL}/posts/${postID}`)
    return response.data
}

export const findPostsByUser = async (uid) => {
    const response = await axios.get(`${BASE_API_URL}/posts/users/${uid}`)
    return response.data
}