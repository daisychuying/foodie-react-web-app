import {createSlice} from "@reduxjs/toolkit";
import {
    createBookmarkThunk,
    deleteBookmarkThunk,
    findBookmarksByUserThunk, findTopBookmarkedThunk,
    findUserHasBookmarkedThunk
} from "./bookmarks-thunks";

const initialState = {
    bookmarks: [],
    hasBookmarked: false,
    topBookmarked: {}
}

const bookmarksReducer = createSlice({
    name: 'bookmarks',
    initialState,
    extraReducers: {
        [createBookmarkThunk.fulfilled]: (state, action) => {
            state.bookmarks.push(action.payload);
            state.hasBookmarked = true;
        },
        [findBookmarksByUserThunk.fulfilled]: (state, action) => {
            state.bookmarks = action.payload;
        },
        [findUserHasBookmarkedThunk.fulfilled]: (state, action) => {
            state.hasBookmarked = action.payload;
        },
        [deleteBookmarkThunk.fulfilled]: (state, action) => {
            state.hasBookmarked = false;
        },
        [findTopBookmarkedThunk.fulfilled]: (state, action) => {
            state.topBookmarked = action.payload;
        }
    }
})

export default bookmarksReducer.reducer;