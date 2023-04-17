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
import React, { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemsSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import SideBarIcon from 'shared/assets/icons/thin-chevron-round-right-icon.svg';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SideBarItemsList } from 'widgets/SideBar/model/items';
import { SideBarItem } from '../../SideBarItem/ui/SideBarItem';
import cls from './SideBar.module.scss';
export var SideBar = memo(function (_a) {
    var _b, _c, _d;
    var className = _a.className;
    var _e = React.useState(true), collapsed = _e[0], setCollapses = _e[1];
    var t = useTranslation().t;
    var onToggle = function () {
        setCollapses(function (prev) { return !prev; });
    };
    var itemsList = useMemo(function () { return SideBarItemsList.map(function (item) { return (_jsx(SideBarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [collapsed]);
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.sideBar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx("div", __assign({ className: classNames(cls.sidebarIcons, (_c = {}, _c[cls.openSideBarIcon] = !collapsed, _c)) }, { children: _jsx(Button, __assign({ "data-testid": "sidebar-toggle", theme: ButtonTheme.CLEAR, onClick: onToggle, size: ButtonSize.M }, { children: _jsx(SideBarIcon, { fill: "white", className: cls.icon, width: 48, height: 48 }, void 0) }), void 0) }), void 0), _jsx("div", __assign({ className: cls.items }, { children: itemsList }), void 0), _jsxs("div", __assign({ className: classNames(cls.switchers, (_d = {}, _d[cls.collapsedIcons] = collapsed, _d)) }, { children: [_jsx(LangSwitcher, {}, void 0), _jsx(ThemeSwitcher, {}, void 0), _jsx("div", __assign({ className: cls.language }, { children: t('Язык') }), void 0)] }), void 0)] }), void 0));
});
