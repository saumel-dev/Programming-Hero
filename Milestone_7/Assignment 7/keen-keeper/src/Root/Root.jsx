import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import ContextProvider from '../Context/ContextProvider';

const Root = () => {
    return (
        <ContextProvider>
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </ContextProvider>
    );
};

export default Root;