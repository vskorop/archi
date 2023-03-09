import { Country, Currency } from 'shared/const/common';

export interface Profile {
    id: string;
    username: string;
    password: string;
    country: Country;
    city: string;
    age: number;
    currency: Currency;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean
}
