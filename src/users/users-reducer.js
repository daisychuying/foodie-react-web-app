import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk} from "./users-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: []
    },
    reducers: {},
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
})

export default usersReducer.reducer