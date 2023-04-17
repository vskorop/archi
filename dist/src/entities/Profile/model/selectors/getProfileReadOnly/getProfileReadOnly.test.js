import { getProfileReadOnly } from './getProfileReadOnly';
describe('getProfileReadOnly', function () {
    test('should return ReadOnly', function () {
        var state = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state)).toEqual(true);
    });
    test('should return undefined', function () {
        var state = {};
        expect(getProfileReadOnly(state)).toEqual(undefined);
    });
});
