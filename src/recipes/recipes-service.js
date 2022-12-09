import axios from "axios";

const APIKEY = 'apiKey=66bdcff59e0840e880b882404769ea0d';

const SEARCH_URL = `https://api.spoonacular.com/recipes/complexSearch?${APIKEY}&number=15&query=`
const DETAIL_URL = 'https://api.spoonacular.com/recipes/'
const RANDOM_URL = `https://api.spoonacular.com/recipes/random?number=16&${APIKEY}`

export const findRecipeBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`);
    return response.data.results;
}

export const findRecipeById = async (recipeId) => {
    const response = await axios.get(`${DETAIL_URL}${recipeId}/information?${APIKEY}`);
    return response.data;
}

export const getRandomRecipes = async () => {
    const response = await axios.get(RANDOM_URL);
    return response.data.recipes;
}