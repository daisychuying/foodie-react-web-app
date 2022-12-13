import {createSlice} from "@reduxjs/toolkit";
import {
    createPostThunk,
    findAllPostsThunk,
    findPostByIDThunk,
    findPostsByUserThunk,
    deletePostThunk,
    findPostBySearchTermThunk
} from "./posts-thunks";
// import postDetail from "./post-detail";
// import {createPostThunk, deletePostThunk, findAllPostsThunk, findPostByIDThunk} from "./posts-thunks";

const postsReducer = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        postDetail: null,
        postsByUser: []
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
        [findPostsByUserThunk.fulfilled]: (state, action) => {
            state.postsByUser = action.payload
        },
        [deletePostThunk.fulfilled]: (state, {payload}) => {
            state.posts = state.posts.filter(p => p._id !== payload);
        },
        [findPostBySearchTermThunk.fulfilled]: (state, action) => {
            state.posts = action.payload;
        }
    }

})

export default postsReducer.reducer

