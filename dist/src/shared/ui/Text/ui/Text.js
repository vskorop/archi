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
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["RIGHT"] = "right";
    TextAlign["LEFT"] = "left";
    TextAlign["CENTER"] = "center";
})(TextAlign || (TextAlign = {}));
export var Text = memo(function (props) {
    var _a;
    var text = props.text, title = props.title, className = props.className, _b = props.theme, theme = _b === void 0 ? TextTheme.PRIMARY : _b, _c = props.align, align = _c === void 0 ? TextAlign.LEFT : _c;
    var mods = (_a = {},
        _a[cls[theme]] = true,
        _a[cls[align]] = true,
        _a);
    return (_jsxs("div", __assign({ className: classNames(cls.text, mods, [className]) }, { children: [title && _jsx("p", __assign({ className: cls.title }, { children: title }), void 0), text && _jsx("p", __assign({ className: cls.text }, { children: text }), void 0)] }), void 0));
});
