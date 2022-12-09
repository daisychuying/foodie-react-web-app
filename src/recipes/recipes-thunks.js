import {findRecipeById, findRecipeBySearchTerm, getRandomRecipes} from "./recipes-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const findRecipeBySearchTermThunk = createAsyncThunk (
    'findRecipeBySearchTerm', (term) => findRecipeBySearchTerm(term)
)

export const findRecipeByIdThunk = createAsyncThunk (
    'findRecipeById', (recipeId) => findRecipeById(recipeId)
)

export const getRandomRecipesThunk = createAsyncThunk (
    'getRandomRecipes', () => getRandomRecipes()
)