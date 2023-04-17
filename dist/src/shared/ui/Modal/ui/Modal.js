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
import { useCallback, useEffect, useRef, useState, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'widgets/Portal/Portal';
import cls from './Modal.module.scss';
var ANIMATION_DELAY = 300;
export var Modal = function (props) {
    var _a;
    var isOpen = props.isOpen, onClose = props.onClose, children = props.children, className = props.className, lazy = props.lazy;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var _c = useState(false), isMounted = _c[0], setIsMounted = _c[1];
    var timeRef = useRef();
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
        return function () {
            setIsMounted(false);
        };
    }, [isOpen]);
    var onStopPropagation = function (e) {
        e.stopPropagation();
    };
    var onCloseHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a);
    if (lazy && !isMounted)
        return null;
    return (_jsx(Portal, { children: _jsx("div", __assign({ className: classNames(cls.modal, mods, [className]) }, { children: _jsx("div", __assign({ className: classNames(cls.overlay), onClick: onCloseHandler }, { children: _jsx("div", __assign({ className: classNames(cls.content), onClick: onStopPropagation }, { children: children }), void 0) }), void 0) }), void 0) }, void 0));
};
