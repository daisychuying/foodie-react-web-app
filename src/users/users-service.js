import axios from "axios";

const BASE_API_URL = 'http://localhost:4000/api'
// const BASE_API_URL = 'https://foodie-node-server-app.herokuapp.com/api'

export const findUserById = async (uid) => {
    const response = await axios.get(`${BASE_API_URL}/users/${uid}`)
    return response.data
}

export const register = async (user) => {
    const response = await axios.post(`${BASE_API_URL}/register`, user)
    return response.data
}
export const login = async (user) => {
    const response = await axios.post(`${BASE_API_URL}/login`, user)
    return response.data
}


export const logout = async () => {
    const response = await axios.post(`${BASE_API_URL}/logout`)
    return response.data
}
export const profile = async () => {
    const response = await axios.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_API_URL}/users`)
    return response.data
}


export const updateUser = async (updatedUser) => {
    const response = await axios.put(`${BASE_API_URL}/users/${updatedUser._id}`, updatedUser)
    return updatedUser;
}

const deleteUser = () => {}