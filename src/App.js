import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PublicRoutes from './Routes/PublicRoutes';
import RequireAuth from './Authentication/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Signup from './Pages/Login/Signup';
import Purches from './Pages/Purches/Purches';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className=""  data-theme="light">
      <Navbar />
      <ToastContainer/>
      {<Routes>

        {PublicRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}

        <Route element={<RequireAuth />} >
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/purches/:id" element={<Purches />}></Route>
        </Route>

        <Route path="/signup" element={<Signup />}></Route>
      </Routes>}

    </div>
  );
}

export default App;
