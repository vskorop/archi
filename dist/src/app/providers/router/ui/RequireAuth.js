import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation, Navigate, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
export function RequireAuth(_a) {
    var children = _a.children;
    var auth = useSelector(getUserAuthData);
    var location = useLocation();
    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return _jsx(Navigate, { to: RoutePath.main, state: { from: location }, replace: true }, void 0);
    }
    return children;
}
