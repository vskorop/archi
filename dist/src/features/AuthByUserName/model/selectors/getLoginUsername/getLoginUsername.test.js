import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername.test', function () {
    test('should return value', function () {
        var state = {
            login: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state)).toEqual('username');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});
