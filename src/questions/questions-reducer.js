import {createSlice} from "@reduxjs/toolkit";
import {createQuestionThunk, deleteQuestionThunk, findQuestionsByPostIDThunk} from "./questions-thunk";

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
        }
    }
})

export default questionReducer.reducer;