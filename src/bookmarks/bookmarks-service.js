import axios from "axios";

// const BOOKMARKS_API = 'http://localhost:4000/api/bookmarks'
// const USER_BOOKMARKS_API = 'http://localhost:4000/api/users'

const BASE_API_URL = 'https://foodie-node-server-app.herokuapp.com/api'
const BOOKMARKS_API = 'https://foodie-node-server-app.herokuapp.com/api/bookmarks'
const USER_BOOKMARKS_API = 'https://foodie-node-server-app.herokuapp.com/api/users'


export const createBookmark = async (bookmark) => {
    const response = await axios.post(BOOKMARKS_API, bookmark);
    return response.data;
}

export const deleteBookmark = async (user, recipeID) => {
    const response = await axios.delete(`${USER_BOOKMARKS_API}/${user}/bookmarks/${recipeID}`);
    return response.data;
}

export const findBookmarksByUser = async (user) => {
    const response = await axios.get(`${USER_BOOKMARKS_API}/${user}/bookmarks`);
    return response.data;
}

export const findUserHasBookmarked = async (user, recipeID) => {
    const response = await axios.get(`${USER_BOOKMARKS_API}/${user}/bookmarks/${recipeID}`);
    return response.data;
}
