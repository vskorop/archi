import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';
describe('getProfile Validate Errors', function () {
    test('should return Array with: [ SERVER_ERROR, NO_DATA ] ', function () {
        var state = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA],
            },
        };
        expect(getProfileValidateErrors(state))
            .toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA]);
    });
    test('should return undefined', function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});
