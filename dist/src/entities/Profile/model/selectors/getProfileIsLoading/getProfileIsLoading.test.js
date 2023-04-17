import { getProfileIsLoading } from './getProfileIsLoading';
describe('getProfileIsLoading', function () {
    test('should return isLoading', function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('should return undefined', function () {
        var state = {};
        expect(getProfileIsLoading(state)).toEqual(undefined);
    });
});
