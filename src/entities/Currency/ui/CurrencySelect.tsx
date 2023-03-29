import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
    className?: string
    value?: Currency;
    onChange?:(value:Currency) => void
    readonly?: boolean

}
const options = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },

];
export const CurrencySelect = ({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
