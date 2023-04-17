import { updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { profileActions, profileReducer } from './profileSlice';
var data = {
    age: 25,
    avatar: 'https://media.tenor.com/D5bFxOZk_S4AAAAC/patrick-star.gif',
    city: 'city',
    country: Country.RUS,
    currency: Currency.RUB,
    first: 'firstname',
    lastname: 'lastname',
    username: 'username',
};
describe('profileSlice.test', function () {
    test('test readonly', function () {
        var state = { readonly: false };
        expect(profileReducer(state, profileActions.setReadOnly(true))).toEqual({ readonly: true });
    });
    test('profileSlice change name', function () {
        var state = {
            form: {
                username: 'name',
            },
        };
        expect(profileReducer(state, profileActions.updateProfile({ username: 'newName' }))).toEqual({
            form: { username: 'newName' },
        });
    });
    test('profileSlice extra reducer pending', function () {
        var state = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('profileSlice extra reducer fulfilled', function () {
        var state = {
            isLoading: true,
        };
        expect(profileReducer(state, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data: data,
        });
    });
});
