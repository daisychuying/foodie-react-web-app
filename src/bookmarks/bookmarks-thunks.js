import {createAsyncThunk} from "@reduxjs/toolkit";
import {createBookmark, deleteBookmark, findBookmarksByUser, findUserHasBookmarked} from "./bookmarks-service";

export const createBookmarkThunk = createAsyncThunk(
    'createBookmark', async (bookmark) => createBookmark(bookmark)
)

export const deleteBookmarkThunk = createAsyncThunk(
    'deleteBookmark', async (bookmark) => deleteBookmark(bookmark.user, bookmark.recipeID)
)

export const findBookmarksByUserThunk = createAsyncThunk(
    'findBookmarksByUser', async (user) => findBookmarksByUser(user)
)

export const findUserHasBookmarkedThunk = createAsyncThunk(
    'findUserHasBookmarked', async (bookmark) => findUserHasBookmarked(bookmark.user, bookmark.recipeID)
)