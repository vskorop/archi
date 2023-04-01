import { userActions } from 'entities/User/model/slice/userSlice';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('get profile by get request', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('get profile by get request with error status', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
