import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
var initialState = {
    data: undefined,
    error: undefined,
    isLoading: false,
};
export var articleSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(loginByUsername.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, function (state, action) {
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articlesActions = articleSlice.actions;
export var articlesReducer = articleSlice.reducer;
