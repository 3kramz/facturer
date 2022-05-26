import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MyProfile from './MyProfile/MyProfile';
import MyOrders from './MyOrders/MyOrder';
import AddAReview from './AddAReview/AddAReview';
import AddProduct from './AddProduct/AddProduct';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import UpdateProducts from './UpdateProducts/UpdateProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../../Components/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);

    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email
        fetch(`http://localhost:5000/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdminLoading(false)
                setAdmin(data.admin)
            })
    }, [user])

    if (adminLoading || loading) { return <Loading /> }

    const privateLink = <>
        <li><NavLink to="/dashboard/my-profile" element={<MyProfile></MyProfile>}>My Profile</NavLink></li>
        <li><NavLink to="/dashboard/my-orders" element={<MyOrders></MyOrders>}>My Orders</NavLink></li>
        <li><NavLink to="/dashboard/add-a-review" element={<AddAReview></AddAReview>}>Add A Review</NavLink></li>
    </>

    const adminLink = <>
        <li><NavLink to="/dashboard/my-profile" element={<MyProfile></MyProfile>}>My Profile</NavLink></li>
        <li><NavLink to="/dashboard/add-product" element={<AddProduct></AddProduct>}>Add products</NavLink></li>
        <li><NavLink to="/dashboard/Update-Products" element={<UpdateProducts></UpdateProducts>}>Update Products</NavLink></li>
        <li><NavLink to="/dashboard/manageAll-orders" element={<ManageAllOrders></ManageAllOrders>} >Manage All Order</NavLink></li>
        <li><NavLink to="/dashboard/make-admin" element={<MakeAdmin></MakeAdmin>}>Make Admin</NavLink></li>
    </>

    return (
        <>
            <label for="dashboard" class="ml-4  drawer-button lg:hidden mt-46">
                <kbd class="kbd text-black">⌘</kbd>
            </label>
            <div class="drawer drawer-mobile">

                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border-r-2 ">
                        {user && !admin && privateLink}
                        {user && admin && adminLink}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;