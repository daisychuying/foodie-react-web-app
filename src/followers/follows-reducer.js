import {createSlice} from "@reduxjs/toolkit";
import {
    findFollowersThunk,
    findFollowingThunk,
    findUserHasFollowedThunk,
    followUserThunk,
    unfollowUserThunk
} from "./follows-thunks";

const followsReducer = createSlice({
    name: 'follows',
    initialState: {
        following: [],
        followers: [],
        hasFollowed: null
    },
    extraReducers: {
        [followUserThunk.fulfilled]: (state, {payload}) => {
            state.followers.push(payload)
            state.hasFollowed = true
        },
        [findFollowersThunk.fulfilled]: (state, {payload}) => {
            state.followers = payload
        },
        [findFollowingThunk.fulfilled]: (state, {payload}) => {
            state.following = payload
        },
        [findUserHasFollowedThunk.fulfilled]: (state, action) => {
            state.hasFollowed = action.payload
        },
        [unfollowUserThunk.fulfilled]: (state, action) => {
            state.hasFollowed = null
            state.followers = state.followers.filter(follow => follow._id !== action.payload._id)
        },
    }
})

export default followsReducer.reducer