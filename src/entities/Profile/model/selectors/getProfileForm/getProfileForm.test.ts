import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

const form = {
    age: 25,
    avatar: 'https://media.tenor.com/D5bFxOZk_S4AAAAC/patrick-star.gif',
    city: 'city',
    country: Country.RUS,
    currency: Currency.RUB,
    first: 'firstname',
    lastname: 'lastname',
    username: 'username',
};

describe('getProfileData', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
