import React from 'react';
import useAuth from '../hooks/useAuth';
import { AuthType, ROLES, UserAuthType } from '../types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LINKS } from '../config/constants';

interface RequireAuth {
    allowedRoles: ROLES[];
}

const RequireAuth = ({ allowedRoles }: RequireAuth) => {
    const { auth, setAuth } = useAuth() as AuthType;
    const location = useLocation();

    return auth?.roles?.find(role => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : auth.id ? (
        <Navigate
            to={`/${LINKS.UNAUTHORIZED}`}
            state={{ from: location }}
            replace
        />
    ) : (
        <Navigate to={`/${LINKS.LOGIN}`} state={{ from: location }} replace />
    );
};

export default RequireAuth;
