import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <>
            <label for="dashboard" class="btn  drawer-button lg:hidden mt-46">
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
                        <p className="">Dash Board</p>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;