import {createSlice} from "@reduxjs/toolkit";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: []
    },
    reducers: {},
    extraReducers: {}
})

export default usersReducer.reducer