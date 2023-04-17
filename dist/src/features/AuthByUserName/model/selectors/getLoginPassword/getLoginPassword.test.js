import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
describe('getLoginPassword.test', function () {
    test('should return password ', function () {
        var state = {
            login: { password: 'password' },
        };
        expect(getLoginPassword(state)).toEqual('password');
    });
    test('should return false ', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});
