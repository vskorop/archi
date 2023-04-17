import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';
var form = {
    age: 25,
    avatar: 'https://media.tenor.com/D5bFxOZk_S4AAAAC/patrick-star.gif',
    city: 'city',
    country: Country.RUS,
    currency: Currency.RUB,
    first: 'firstname',
    lastname: 'lastname',
    username: 'username',
};
describe('getProfileData', function () {
    test('should return profile form', function () {
        var state = {
            profile: {
                form: form,
            },
        };
        expect(getProfileForm(state)).toEqual(form);
    });
    test('should return undefined', function () {
        var state = {};
        expect(getProfileForm(state)).toEqual(undefined);
    });
});
