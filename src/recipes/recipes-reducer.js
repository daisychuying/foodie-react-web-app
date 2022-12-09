import {createSlice} from "@reduxjs/toolkit";
import {findRecipeByIdThunk, findRecipeBySearchTermThunk, getRandomRecipesThunk} from "./recipes-thunks";

const initialState = {
    recipes: [],
    loading: false,
    details: {},
}

const recipesReducder = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: {
        [findRecipeBySearchTermThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload;
        },
        [findRecipeByIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload;
        },
        [getRandomRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload;
        }
    }
})

export default recipesReducder.reducer;