import {createSlice} from "@reduxjs/toolkit";
import {createBookmarkThunk, findBookmarksByUserThunk} from "./bookmarks-thunks";

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
        },
        [findBookmarksByUserThunk.fulfilled]: (state, action) => {
            state.bookmarks = action.payload;
        }
    }
})

export default bookmarksReducer.reducer;