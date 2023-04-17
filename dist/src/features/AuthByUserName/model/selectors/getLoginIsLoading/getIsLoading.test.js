import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
describe('getLoginIsLoading.test', function () {
    test('should return true ', function () {
        var state = {
            login: { isLoading: true },
        };
        expect(getLoginIsLoading(state)).toEqual(true);
    });
    test('should return false ', function () {
        var state = {};
        expect(getLoginIsLoading(state)).toEqual(false);
    });
});
