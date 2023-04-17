import { loginActions, loginReducer } from './loginSlice';
describe('loginSlice.test', function () {
    test('test set username', function () {
        var state = { username: '' };
        expect(loginReducer(state, loginActions.setUsername('123'))).toEqual({ username: '123' });
    });
    test('test set password', function () {
        var state = { password: '' };
        expect(loginReducer(state, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
