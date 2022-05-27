import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import RequireAuth from './Authentication/RequireAuth';
import RequireAdmin from './Authentication/RequireAdmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purches from './Pages/Purches/Purches';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRoutes from './Routes/AdminRoutes';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';



function App() {

  const [user, loading] = useAuthState(auth);

  const [admin, setAdmin] = useState(false)
  const [adminLoading, setAdminLoading] = useState(true)
  useEffect(() => {
    const email = user?.email
    fetch(`http://localhost:5000/admin/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setAdminLoading(false)
        setAdmin(data.admin)
      })
  }, [user])

  if (adminLoading || loading) {
    return <Loading />
  }

  return (
    <div className="" data-theme="light">
      <Navbar />
      <ToastContainer />
      {<Routes>

        {PublicRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}

        <Route element={<RequireAuth />} >
          <Route path="/dashboard" element={<Dashboard />}>

          <Route path= "/dashboard/my-profile" element={<MyProfile/>}/>
            {!admin && PrivateRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}
          </Route>
          {!admin &&<Route path="/purches/:id" element={<Purches />} /> }
        </Route>

        <Route element={<RequireAdmin />} >
          <Route path="/dashboard" element={<Dashboard />}>
            {AdminRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}
          </Route>
        </Route>


      </Routes>}

    </div>
  );
}

export default App;
