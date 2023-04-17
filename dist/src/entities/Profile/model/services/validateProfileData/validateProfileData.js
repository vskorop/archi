import { ValidateProfileError } from 'entities/Profile/model/types/profile';
export var validateProfileData = function (profile) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    var first = profile.first, lastname = profile.lastname, avatar = profile.avatar, city = profile.city;
    var errors = [];
    if (!first) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    return errors;
};
