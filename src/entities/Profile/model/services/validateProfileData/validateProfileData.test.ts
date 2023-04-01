import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('validate ProfileData', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without firstName', () => {
        const result = validateProfileData({ ...data, first: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without lastName', () => {
        const result = validateProfileData({ ...data, lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without avatar', () => {
        const result = validateProfileData({ ...data, avatar: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });
    test('without city', () => {
        const result = validateProfileData({ ...data, city: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });
});
