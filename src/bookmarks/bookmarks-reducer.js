import {createSlice} from "@reduxjs/toolkit";
import {
    createBookmarkThunk,
    deleteBookmarkThunk,
    findBookmarksByUserThunk,
    findUserHasBookmarkedThunk
} from "./bookmarks-thunks";

const initialState = {
    bookmarks: [],
    hasBookmarked: false,
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
        }
    }
})

export default bookmarksReducer.reducer;