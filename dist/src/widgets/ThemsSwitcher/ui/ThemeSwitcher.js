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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/';
import LightTheme from 'shared/assets/icons/day-sunny-svgrepo-com.svg';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
export var ThemeSwitcher = memo(function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, className: classNames(cls.themeSwitcher, {}, [className]), onClick: toggleTheme }, { children: _jsx(LightTheme, { className: cls.icon, height: 32, width: 32 }, void 0) }), void 0));
});
