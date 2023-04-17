var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage/';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticlesDetailedPage } from 'pages/ArticlesDetailedPage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILED"] = "article_detailed";
    // last
    AppRoutes["NOT_FOUND"] = "not_found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILED] = '/articles/',
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRoutes.PROFILE] = {
        path: RoutePath.profile,
        element: _jsx(ProfilePage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlesPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_DETAILED] = {
        path: "".concat(RoutePath.article_detailed, ":id"),
        element: _jsx(ArticlesDetailedPage, {}, void 0),
        authOnly: true,
    },
    // last route
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b);
