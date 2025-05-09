import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <h1>THis is main</h1>
            <Outlet/>
            <h2>Footer </h2>
        </div>
    );
};

export default MainLayout;