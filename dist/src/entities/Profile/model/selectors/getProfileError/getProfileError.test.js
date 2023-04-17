import { getProfileError } from './getProfileError';
describe('getProfileError', function () {
    test('should return error', function () {
        var state = {
            profile: {
                error: 'true',
            },
        };
        expect(getProfileError(state)).toEqual('true');
    });
    test('should return undefined', function () {
        var state = {};
        expect(getProfileError(state)).toEqual(undefined);
    });
});
