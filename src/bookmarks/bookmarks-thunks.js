import {createAsyncThunk} from "@reduxjs/toolkit";
import {createBookmark, findBookmarksByUser} from "./bookmarks-service";

export const createBookmarkThunk = createAsyncThunk(
    'createBookmark', async (bookmark) => createBookmark(bookmark)
)

export const findBookmarksByUserThunk = createAsyncThunk(
    'findBookmarksByUser', async (user) => findBookmarksByUser(user)
)