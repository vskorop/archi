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
import { useCallback, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadOnly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { ProfilePageHeader } from './ProgilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (props) {
    var className = props.className;
    var dispatch = useAppDispatch();
    var validateErrors = useSelector(getProfileValidateErrors);
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var readonly = useSelector(getProfileReadOnly);
    var isLoading = useSelector(getProfileIsLoading);
    useEffect(function () {
        if (__PROJECT !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);
    var onChangeFirstName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ currency: value || '' }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ country: value || '' }));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames(cls.profilePage, {}, [className]) }, { children: [_jsx(ProfilePageHeader, {}, void 0), validateErrors && validateErrors.map(function (item) { return (_jsx(Text, { theme: TextTheme.ERROR, text: item }, item)); }), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, onChangeFirstName: onChangeFirstName, onChangeLastName: onChangeLastName, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry, readonly: readonly }, void 0)] }), void 0) }), void 0));
};
export default ProfilePage;
