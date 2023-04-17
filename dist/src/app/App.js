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
import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import './styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slice/userSlice';
import { getUserMounted } from 'entities/User';
function App() {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var dispatch = useDispatch();
    var isMounted = useSelector(getUserMounted);
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames('app', {}, []) }, { children: _jsxs(Suspense, __assign({ fallback: "" }, { children: [_jsx(Navbar, {}, void 0), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(SideBar, {}, void 0), isMounted && _jsx(AppRouter, {}, void 0)] }), void 0)] }), void 0) }), void 0));
}
export default App;
