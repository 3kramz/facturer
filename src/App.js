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
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';



function App() {

  return (
    <div className="" data-theme="light">
      <Navbar />
      <ToastContainer />

{/* Public Route */}
      {<Routes>{PublicRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}
{/* Private route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route element={<RequireAuth />} >{PrivateRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}
          </Route>
        </Route>

        <Route element={<RequireAuth />} >
          <Route path="/purches/:id" element={<Purches />} />
        </Route>
{/* Admin roite */}
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
