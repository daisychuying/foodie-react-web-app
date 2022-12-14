import {createAsyncThunk} from "@reduxjs/toolkit";
import {createQuestion, deleteQuestion, findQuestionsByPostID} from "./questions-service";

export const createQuestionThunk = createAsyncThunk(
    'createQuestion', async (question) => createQuestion(question)
)

export const deleteQuestionThunk = createAsyncThunk(
    'deleteQuestion', async (questionID) => deleteQuestion(questionID)
)

export const findQuestionsByPostIDThunk = createAsyncThunk(
    'findQuestionsByPostID', async (postID) => findQuestionsByPostID(postID)
)