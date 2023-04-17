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
import ErrorIcon from 'shared/assets/icons/error-svgrepo-com (1).svg';
import cls from './NotFoundPage.module.scss';
export var NotFoundPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsxs("div", __assign({ className: classNames(cls.notFoundPage, {}, [className]) }, { children: [t('Страница 404'), _jsx("div", { children: _jsx(ErrorIcon, { height: 200, width: 200 }, void 0) }, void 0)] }), void 0));
};
