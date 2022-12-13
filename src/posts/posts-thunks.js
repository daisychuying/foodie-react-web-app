import {createAsyncThunk} from "@reduxjs/toolkit";
import {createPost, findAllPosts, findPostByID, findPostsByUser, deletePost} from "./posts-service";

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

export const findPostsByUserThunk = createAsyncThunk(
    'findPostsByUser',
    async (uid) => await findPostsByUser(uid)
)

export const deletePostThunk = createAsyncThunk(
    'deletePost',
    async (postID) => await deletePost(postID)
)