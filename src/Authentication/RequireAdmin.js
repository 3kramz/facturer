import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from '../Components/Loading'
import useAdmin from '../Hooks/useAdmin';

const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);

    const [admin, adminLoading] = useAdmin(user)

    const location = useLocation()

    if (adminLoading || loading) {
        return <Loading />
    }

    else if (!admin) {
        return <Navigate to="/login " state={{ from: location }} replace />
    }

    else {
        return <Outlet />
    }
};

export default RequireAdmin;