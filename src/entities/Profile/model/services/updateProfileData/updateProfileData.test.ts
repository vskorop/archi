import { userActions } from 'entities/User/model/slice/userSlice';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData.test', () => {
    test('test without changes', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('update with 403 status error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    // test('validate error', async () => {
    //     const thunk = new TestAsyncThunk(updateProfileData, {
    //         profile: {
    //             form: { ...data, lastname: '' },
    //         },
    //     });
    //
    //     const result = await thunk.callThunk();
    //
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]); // неверная ошибка - нужно поправить в updateProfileData
    // });
});
