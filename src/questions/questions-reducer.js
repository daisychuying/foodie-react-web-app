import {createSlice} from "@reduxjs/toolkit";
import {
    answerQuestionThunk,
    createQuestionThunk,
    deleteQuestionThunk,
    findQuestionsByPostIDThunk
} from "./questions-thunk";
import {deleteReviewThunk} from "../reviews/reviews-thunk";

const initialState = {
    questions: [],
}

const questionReducer = createSlice({
    name: 'questions',
    initialState,
    extraReducers:{
        [createQuestionThunk.fulfilled]: (state, {payload}) => {
            state.questions.unshift(payload);
        },
        [deleteQuestionThunk.fulfilled]: (state, {payload}) => {
            state.questions = state.questions.filter(q => q._id !== payload);
        },
        [findQuestionsByPostIDThunk.fulfilled]: (state, action) => {
            state.questions = action.payload;
        },
        [answerQuestionThunk.fulfilled]: (state, {payload}) => {
            const idx = state.questions.findIndex(q => q._id === payload._id);
            state.questions[idx] = {...state.questions[idx], ...payload};
        }
    }
})

export default questionReducer.reducer;