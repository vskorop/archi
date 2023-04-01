import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first, lastname, avatar, city,
    } = profile;

    const errors: ValidateProfileError[] = [];

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
