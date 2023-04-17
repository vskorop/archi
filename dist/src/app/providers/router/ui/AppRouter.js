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
import { memo, Suspense, useCallback, useMemo, } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
function AppRouter() {
    var renderWithWrapper = useCallback(function (route) {
        var componentRender = (_jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}, void 0) }, { children: _jsx("div", __assign({ className: "page-wrapper" }, { children: route.element }), void 0) }), void 0));
        return (_jsx(Route, { path: route.path, element: route.authOnly ? _jsx(RequireAuth, { children: componentRender }, void 0) : componentRender }, route.path));
    }, []);
    var isAuth = useSelector(getUserAuthData);
    var routes = useMemo(function () { return Object.values(routeConfig).filter(function (route) {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }); }, [isAuth]);
    return (_jsx(Routes, { children: Object.values(routeConfig).map(renderWithWrapper) }, void 0));
}
export default memo(AppRouter);
