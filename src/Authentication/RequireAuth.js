import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from '../Components/Loading'

const RequireAuth = () => {
    const [user , loading] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <Loading /> 
    }

     else if (!user) {
        return <Navigate to="/login " state={{ from: location }} replace />
    }

    else {
       return <Outlet />
    }
};

export default RequireAuth;