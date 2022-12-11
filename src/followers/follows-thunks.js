import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    followUser,
    findFollowing,
    findFollowers,
    findUserHasFollowed,
    unfollowUser,
} from "./follows-service";

export const followUserThunk = createAsyncThunk(
    'followUser',
    async (follow) => followUser(follow)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async (followed) => await findFollowers(followed)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async (follower) => await findFollowing(follower)
)

export const findUserHasFollowedThunk = createAsyncThunk(
    'findUserHasFollowed',
    async (follow) => await findUserHasFollowed(follow)
)

export const unfollowUserThunk = createAsyncThunk(
    'unfollowUser',
    async (follow) => await unfollowUser(follow)
)