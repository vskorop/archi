import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
describe('getLoginError.test', function () {
    test('should return error ', function () {
        var state = {
            login: { error: 'error' },
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should return undefined ', function () {
        var state = {};
        expect(getLoginError(state)).toEqual(undefined);
    });
});
