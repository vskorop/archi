var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createSlice } from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
var initialState = {
    data: undefined,
    error: '',
    isLoading: false,
    readonly: true,
};
export var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setReadOnly: function (state, action) {
            state.readonly = action.payload;
        },
        onCancelEdit: function (state) {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateProfile: function (state, action) {
            state.form = __assign(__assign({}, state.form), action.payload);
        },
    },
    extraReducers: function (builder) {
        builder.addCase(fetchProfileData.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProfileData.pending, function (state, action) {
            state.validateErrors = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
