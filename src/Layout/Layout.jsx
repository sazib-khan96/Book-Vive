import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto p-3'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;