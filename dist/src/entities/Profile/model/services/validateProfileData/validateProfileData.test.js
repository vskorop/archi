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
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';
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
describe('validateProfileData.test', function () {
    test('validate ProfileData', function () {
        var result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without firstName', function () {
        var result = validateProfileData(__assign(__assign({}, data), { first: '' }));
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without lastName', function () {
        var result = validateProfileData(__assign(__assign({}, data), { lastname: '' }));
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without avatar', function () {
        var result = validateProfileData(__assign(__assign({}, data), { avatar: '' }));
        expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });
    test('without city', function () {
        var result = validateProfileData(__assign(__assign({}, data), { city: '' }));
        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });
});
