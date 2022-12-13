import {createSlice} from "@reduxjs/toolkit";
import {createPostThunk, findAllPostsThunk, findPostByIDThunk, findPostsByUserThunk} from "./posts-thunks";
import postDetail from "./post-detail";
import {findPostsByUser} from "./posts-service";

const postsReducer = createSlice({
        name: 'posts',
        initialState: {
            posts: [],
            postDetail: null
        },
    extraReducers: {
        [createPostThunk.fulfilled]: (state, action) => {
            state.posts.push(action.payload)
        },
        [findAllPostsThunk.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [findPostByIDThunk.fulfilled]: (state, action) => {
            state.postDetail = action.payload
        },
        [findPostsByUserThunk.fulfilled]: (state, action) => {
            state.posts = action.payload
        }
        }
})

export default postsReducer.reducer

