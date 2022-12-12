import axios from "axios";

// const REVIEW_API = 'http://localhost:4000/api/reviews';
// const RECIPE_REVIEW_API = 'http://localhost:4000/api/recipes'

const BASE_API_URL = 'https://foodie-node-server-app.herokuapp.com/api'
const REVIEW_API = 'https://foodie-node-server-app.herokuapp.com/api/reviews';
const RECIPE_REVIEW_API = 'https://foodie-node-server-app.herokuapp.com/api/recipes'


const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review);
    return response.data;
}

export const findReviewsByRecipe = async (recipeID) => {
    const response = await api.get(`${RECIPE_REVIEW_API}/${recipeID}/reviews`);
    return response.data;
}

export const deleteReview = async (reviewID) => {
    await api.delete(`${REVIEW_API}/${reviewID}`);
    return reviewID;
}