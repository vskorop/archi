var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { AvatarTheme } from 'shared/ui/Avatar/ui/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a;
    var className = props.className, error = props.error, isLoading = props.isLoading, data = props.data, onChangeFirstName = props.onChangeFirstName, onChangeLastName = props.onChangeLastName, onChangeAge = props.onChangeAge, onChangeAvatar = props.onChangeAvatar, onChangeCity = props.onChangeCity, onChangeCurrency = props.onChangeCurrency, onChangeCountry = props.onChangeCountry, readonly = props.readonly;
    var t = useTranslation().t;
    var mods = (_a = {},
        _a[cls.editing] = !readonly,
        _a);
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.profileCard, {}, [className]) }, { children: _jsx("div", __assign({ className: classNames(cls.loading, {}, [className, cls.loading]) }, { children: _jsx(Loader, { black: true }, void 0) }), void 0) }), void 0));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.profileCard, {}, [className]) }, { children: _jsx("div", __assign({ className: classNames(cls.error, {}, [className, cls.error]) }, { children: _jsx(Text, { align: TextAlign.CENTER, title: t('Ошибка при загрузке профиля'), text: t('Поробуйте обновить страницу'), theme: TextTheme.ERROR }, void 0) }), void 0) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.profileCard, mods, [className]) }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar, alt: data === null || data === void 0 ? void 0 : data.avatar, theme: AvatarTheme.L }, void 0), _jsxs("div", __assign({ className: cls.data }, { children: [_jsx(Input, { onChange: onChangeFirstName, className: cls.input, value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('Имя'), readonly: readonly }, void 0), _jsx(Input, { onChange: onChangeLastName, className: cls.input, value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Фамилия'), readonly: readonly }, void 0), _jsx(Input, { onChange: onChangeAge, className: cls.input, value: String(data === null || data === void 0 ? void 0 : data.age), placeholder: t('Возраст'), readonly: readonly }, void 0), _jsx(Input, { onChange: onChangeCity, className: cls.input, value: String(data === null || data === void 0 ? void 0 : data.city), placeholder: t('Город'), readonly: readonly }, void 0), _jsx(Input, { onChange: onChangeAvatar, className: cls.input, value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Фото'), readonly: readonly }, void 0), _jsx(CountrySelect, { onChange: onChangeCountry, className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, readonly: readonly }, void 0), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }, void 0)] }), void 0)] }), void 0));
};
