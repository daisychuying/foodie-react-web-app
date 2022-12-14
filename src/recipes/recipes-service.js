import axios from "axios";

// const APIKEY = 'apiKey=b4acd4eb87e644f5b8f9ae2fdac2c751';
// const APIKEY = 'apiKey=ee417be1ca4741b79cfb938e9a71b1f0';
const APIKEY = 'apiKey=e213e673ac394daa9f1885e7a7c09dd7';
// const APIKEY = 'apiKey=66bdcff59e0840e880b882404769ea0d';

const SEARCH_URL = `https://api.spoonacular.com/recipes/complexSearch?${APIKEY}&query=`
const DETAIL_URL = 'https://api.spoonacular.com/recipes/'
const RANDOM_URL = `https://api.spoonacular.com/recipes/random?number=16&${APIKEY}`
const RANDOM_TWO_URL = `https://api.spoonacular.com/recipes/random?number=2&${APIKEY}`

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

export const getRandomTwoRecipes = async () => {
    const response = await axios.get(RANDOM_TWO_URL);
    return response.data.recipes;
}