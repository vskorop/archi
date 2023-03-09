import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true ', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return false ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
