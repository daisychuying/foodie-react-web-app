import axios from "axios";

const BOOKMARKS_API = 'http://localhost:4000/api/bookmarks'
const USER_BOOKMARKS_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true});

export const createBookmark = async (bookmark) => {
    const response = await api.post(BOOKMARKS_API, bookmark);
    return response.data;
}

export const findBookmarksByUser = async (user) => {
    const response = await api.get(`${USER_BOOKMARKS_API}/${user}/bookmarks`);
    return response.data;
}