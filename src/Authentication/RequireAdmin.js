import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from '../Components/Loading'

const RequireAdmin = () => {
    const [user , loading] = useAuthState(auth);

    const [admin, setAdmin]=useState(false)
    const [adminLoading, setAdminLoading]=useState(true)
    useEffect(()=>{
        const email = user?.email
        fetch(`http://localhost:5000/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdminLoading(false)
            setAdmin(data.admin)
        })
    },[user])

    const location = useLocation()
    
    if(adminLoading ||loading){
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