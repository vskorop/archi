import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'

}
export interface Profile {
    first?: string;
    lastname?: string;
    username?: string;
    country?: Country;
    city?: string;
    age?: number;
    currency?: Currency;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
