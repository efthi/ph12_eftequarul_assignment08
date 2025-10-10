import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
//মেইন Layout সব এখান থেকে যাবে
const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;