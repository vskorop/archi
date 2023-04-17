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
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import EnterIcon from 'shared/assets/icons/input-icon.svg';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import cls from './Navbar.module.scss';
export var Navbar = function (props) {
    var t = useTranslation().t;
    var _a = useState(false), isAuthModal = _a[0], setIsAuthModal = _a[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);
    if (authData) {
        return (_jsx("div", __assign({ className: classNames(cls.navbar) }, { children: _jsx("div", __assign({ className: cls.links }, { children: _jsx(Button, __assign({ theme: ButtonTheme.CLEAR, onClick: onLogout, size: ButtonSize.M }, { children: _jsxs("div", __assign({ className: cls.loginContainer }, { children: [_jsx(EnterIcon, { className: cls.link, height: 32, width: 32 }, void 0), t('Выйти')] }), void 0) }), void 0) }), void 0) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.navbar) }, { children: [_jsx("div", __assign({ className: cls.links }, { children: _jsx(Button, __assign({ theme: ButtonTheme.CLEAR, onClick: onShowModal, size: ButtonSize.M }, { children: _jsxs("div", __assign({ className: cls.loginContainer }, { children: [_jsx(EnterIcon, { className: cls.link, height: 32, width: 32 }, void 0), t('Войти')] }), void 0) }), void 0) }), void 0), isAuthModal && _jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }, void 0)] }), void 0));
};
