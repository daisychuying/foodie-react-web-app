import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, deleteReview, findReviewsByRecipe} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview', async (review) => createReview(review)
)

export const findReviewsByRecipeThunk = createAsyncThunk(
    'findReviewsByRecipe', async (recipeID) => findReviewsByRecipe(recipeID)
)

export const deleteReviewThunk = createAsyncThunk(
    'deleteReview', async (reviewID) => deleteReview(reviewID)
)