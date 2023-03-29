import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';

interface CountrySelectProps {
    className?: string
    value?: Country;
    onChange?: (value:Country) => void
    readonly?: boolean

}
const options = [
    {
        value: Country.USA,
        content: Country.USA,
    },
    {
        value: Country.RUS,
        content: Country.RUS,
    },

];
export const CountrySelect = ({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Страна')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
