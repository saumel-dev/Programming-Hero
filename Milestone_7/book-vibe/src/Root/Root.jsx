import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import BookContextProvider from '../Context/BookContextProvider';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <ToastContainer>
            </ToastContainer>
                <Navbar></Navbar>
                <Outlet></Outlet>
        </div>
    );
};

export default Root;