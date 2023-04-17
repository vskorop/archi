import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';
var options = [
    {
        value: Country.USA,
        content: Country.USA,
    },
    {
        value: Country.RUS,
        content: Country.RUS,
    },
];
export var CountrySelect = function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { className: classNames('', {}, [className]), label: t('Страна'), options: options, value: value, onChange: onChangeHandler, readonly: readonly }, void 0));
};
