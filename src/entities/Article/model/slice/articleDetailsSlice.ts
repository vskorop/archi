import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSchema } from 'entities/Article';
import { fetchArticleById } from '../service/fetchArticleById';

const initialState : ArticleSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articlesActions } = articleSlice;
export const { reducer: articlesReducer } = articleSlice;
