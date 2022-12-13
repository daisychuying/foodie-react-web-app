import {createAsyncThunk} from "@reduxjs/toolkit";
import {createPost, deletePost, findAllPosts, findPostByID} from "./posts-service";

export const createPostThunk = createAsyncThunk(
    'createPost',
    async (post) => await createPost(post)
)

export const findAllPostsThunk = createAsyncThunk(
    'findAllPosts',
    async () => await findAllPosts()
)

export const findPostByIDThunk = createAsyncThunk(
    'findPostByID',
    async (postID) => await findPostByID(postID)
)

export const deletePostThunk = createAsyncThunk(
    'deletePost',
    async (postID) => await deletePost(postID)
)