import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, deleteReviewThunk, findReviewsByRecipeThunk} from "./reviews-thunk";

const initialState = {
    reviews: [],
}

const reviewsReducer = createSlice({
    name: "reviews",
    initialState,
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload);
        },
        [findReviewsByRecipeThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload;
        },
        [deleteReviewThunk.fulfilled]: (state, {payload}) => {
            state.reviews = state.reviews.filter(r => r._id !== payload);
        }
    }
})

export default reviewsReducer.reducer;