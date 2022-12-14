import {createSlice} from "@reduxjs/toolkit";
import {
    findRecipeByIdThunk,
    findRecipeBySearchTermThunk,
    getRandomTwoRecipesThunk,
    getRandomRecipesThunk, getFoodieRecommendRecipesThunk, getAdminChoiceRecipesThunk
} from "./recipes-thunks";

const initialState = {
    recipes: [],
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
        },
        [getRandomTwoRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload;
        },
        [getFoodieRecommendRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload;
        },
        [getAdminChoiceRecipesThunk.fulfilled]: (state, action) => {
            state.details = action.payload;
        }
    }
})

export default recipesReducder.reducer;