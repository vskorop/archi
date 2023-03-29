import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

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
}
