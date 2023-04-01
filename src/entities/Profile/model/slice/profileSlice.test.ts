import { ProfileSchema, updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    age: 25,
    avatar: 'https://media.tenor.com/D5bFxOZk_S4AAAAC/patrick-star.gif',
    city: 'city',
    country: Country.RUS,
    currency: Currency.RUB,
    first: 'firstname',
    lastname: 'lastname',
    username: 'username',
};
describe('profileSlice.test', () => {
    test('test readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });
    test('profileSlice change name', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: 'name',
            },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'newName' }),
        )).toEqual({
            form: { username: 'newName' },
        });
    });
    test('profileSlice extra reducer pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('profileSlice extra reducer fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
