import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';

const RequireAuth = () => {
    const [user] = useAuthState(auth);
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login " state={{ from: location }} replace />
    }

    else {
       return <Outlet />
    }
};

export default RequireAuth;