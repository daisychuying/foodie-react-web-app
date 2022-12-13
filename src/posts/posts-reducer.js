import {createSlice} from "@reduxjs/toolkit";
import {createPostThunk, deletePostThunk, findAllPostsThunk, findPostByIDThunk} from "./posts-thunks";

const postsReducer = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        postDetail: null
    },
    extraReducers: {
        [createPostThunk.fulfilled]: (state, action) => {
            state.posts.unshift(action.payload)
        },
        [findAllPostsThunk.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [findPostByIDThunk.fulfilled]: (state, action) => {
            state.postDetail = action.payload
        },
        [deletePostThunk.fulfilled]: (state, {payload}) => {
            state.posts = state.posts.filter(p => p._id !== payload);
        }
    }

})

export default postsReducer.reducer

