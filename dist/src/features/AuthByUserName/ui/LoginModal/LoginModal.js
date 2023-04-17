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
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
export var LoginModal = function (props) {
    var className = props.className, isOpen = props.isOpen, onClose = props.onClose;
    return (_jsx(Modal, __assign({ lazy: true, isOpen: isOpen, onClose: onClose, className: classNames('', {}, [className]) }, { children: _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}, void 0) }, { children: _jsx(LoginFormAsync, { onSuccess: onClose }, void 0) }), void 0) }), void 0));
};
