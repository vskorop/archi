import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData';
import { Profile, ValidateProfileError } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            const errors = validateProfileData(formData);
            if (errors.length) {
                return rejectWithValue(errors);
            } return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
