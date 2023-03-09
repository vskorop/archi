import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password ', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: 'password' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test('should return false ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});
