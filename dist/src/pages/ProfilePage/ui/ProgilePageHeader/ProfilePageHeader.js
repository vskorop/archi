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
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';
export var ProfilePageHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var mods = {};
    var readOnly = useSelector(getProfileReadOnly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.onCancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs("div", __assign({ className: classNames(cls.profileHeader, mods, [className]) }, { children: [_jsx(Text, { title: t('Профиль') }, void 0), readOnly ? (_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.BACKGROUND_INVERTED, onClick: onEdit }, { children: t('Редактировать') }), void 0)) : (_jsxs("div", { children: [_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.CANCEL, onClick: onCancelEdit }, { children: t('Отменить') }), void 0), _jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.SUCCESS, onClick: onSave }, { children: t('Сохранить') }), void 0)] }, void 0))] }), void 0));
});
