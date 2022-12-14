import axios from "axios";

const QUESTION_API = 'http://localhost:4000/api/questions';
const POST_QUESTION_API = 'http://localhost:4000/api/posts'

export const createQuestion = async (question) => {
    const response = await axios.post(QUESTION_API, question);
    return response.data;
}

export const deleteQuestion = async (questionID) => {
    await axios.delete(`${QUESTION_API}/${questionID}`)
    return questionID;
}

export const findQuestionsByPostID = async (postID) => {
    const response = await axios.get(`${POST_QUESTION_API}/${postID}/questions`);
    return response.data;
}