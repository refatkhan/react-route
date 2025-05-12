import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Home/Footer';
import Navbar from '../components/Home/Navbar';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Outlet/>
            <Footer></Footer>
        </>
    );
};

export default Home;