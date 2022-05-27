import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from '../Components/Loading'
import useAdmin from '../Hooks/useAdmin';

const RequireAuth = () => {
    const [user , loading] = useAuthState(auth);
    const [admin, adminLoading]=useAdmin(user)
    
    const location = useLocation()
    
    if(loading || adminLoading ){
        return <Loading /> 
    }

     else if (admin || !user) {
        return <Navigate to="/login " state={{ from: location }} replace />
    }

    else if (user){
       return <Outlet />
    }
};

export default RequireAuth;