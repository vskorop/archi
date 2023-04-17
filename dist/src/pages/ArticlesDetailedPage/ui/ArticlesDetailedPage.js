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
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import cls from './ArticlesDetailedPage.module.scss';
export var ArticlesDetailedPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: classNames(cls.ArticlesDetailedPage, {}, [className]) }, { children: _jsx(ArticleDetails, {}, void 0) }), void 0));
};
