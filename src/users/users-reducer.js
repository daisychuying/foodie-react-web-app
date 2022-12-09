import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, loginThunk, profileThunk, registerThunk} from "./users-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        currentUser:null
    },
    reducers: {},
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]:(state,action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]:(state,action) => {
            state.error = action.payload
        }
    }
})

export default usersReducer.reducer