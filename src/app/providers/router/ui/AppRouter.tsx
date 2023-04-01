import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

function AppRouter() {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => {
            const componentRender = (
                <Suspense fallback={<PageLoader />}>
                    <div className="page-wrapper">
                        {route.element}
                    </div>
                </Suspense>
            );

            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.authOnly ? <RequireAuth>{componentRender}</RequireAuth> : componentRender}
                />
            );
        },

        [],
    );
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>

    );
}

export default memo(AppRouter);
