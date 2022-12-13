import axios from "axios";

const BASE_API_URL = 'http://localhost:4000/api'
// const BASE_API_URL = 'https://foodie-node-server-app.herokuapp.com/api'


export const followUser = async (follow) => {
    const response = await axios.post(`${BASE_API_URL}/follows/`, follow)
    return response.data
}

export const findFollowers = async (followed) => {
    const response = await axios.get(`${BASE_API_URL}/users/${followed}/followers`)
    return response.data
}

export const findFollowing = async (follower) => {
    const response = await axios.get(`${BASE_API_URL}/users/${follower}/following`)
    return response.data
}

export const findUserHasFollowed = async (follow) => {
    const response = await axios.get(`${BASE_API_URL}/users/${follow.followed}/${follow.follower}`)
    return response.data
}

export const unfollowUser = async (follow) => {
    const response = await axios.delete(`${BASE_API_URL}/users/${follow.followed}/${follow.follower}`)
    return response.data
}