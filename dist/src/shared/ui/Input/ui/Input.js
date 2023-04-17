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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
export var Input = memo(function (props) {
    var _a;
    var className = props.className, _b = props.value, value = _b === void 0 ? '' : _b, onChange = props.onChange, placeholder = props.placeholder, autofocus = props.autofocus, _c = props.type, type = _c === void 0 ? 'text' : _c, readonly = props.readonly, otherProps = __rest(props, ["className", "value", "onChange", "placeholder", "autofocus", "type", "readonly"]);
    var _d = useState(false), _ = _d[0], setIsFocused = _d[1];
    var ref = useRef(null);
    useEffect(function () {
        var _a;
        if (autofocus) {
            setIsFocused(true);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autofocus]);
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    var onBlur = function () {
        setIsFocused(false);
    };
    var onFocus = function () {
        setIsFocused(true);
    };
    var mods = (_a = {},
        _a[cls.readonly] = readonly,
        _a);
    return (_jsx("div", __assign({ className: classNames(cls.inputContainer, mods, [className]) }, { children: _jsx("input", __assign({ ref: ref, placeholder: placeholder, type: type, value: value, onChange: onChangeHandler, className: cls.input, onBlur: onBlur, onFocus: onFocus, readOnly: readonly }, otherProps), void 0) }), void 0));
});
