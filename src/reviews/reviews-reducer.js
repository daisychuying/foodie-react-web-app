import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsByRecipeThunk} from "./reviews-thunk";

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
        }
    }
})

export default reviewsReducer.reducer;