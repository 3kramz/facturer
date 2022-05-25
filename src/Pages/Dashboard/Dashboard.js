import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MyProfile  from './MyProfile/MyProfile';
import MyOrders   from './MyOrders/MyOrder';
import AddAReview from './AddAReview/AddAReview';

const Dashboard = () => {
const privateLi =<>
<li><NavLink to="/dashboard/my-profile"   element={<MyProfile></MyProfile>}>My Profile</NavLink></li>
<li><NavLink to="/dashboard/my-orders"    element={<MyOrders></MyOrders>}>My Orders</NavLink></li>
<li><NavLink to="/dashboard/add-a-review" element={<AddAReview></AddAReview>}>Add A Review</NavLink></li>

</>
    return (
        <>
            <label for="dashboard" class="ml-4  drawer-button lg:hidden mt-46">
                <kbd class="kb text-black">⌘</kbd>
            </label>
            <div class="drawer drawer-mobile">

                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                       {privateLi}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;