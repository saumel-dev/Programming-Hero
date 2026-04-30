import BreakingNews from '@/Components/Shared/BreakingNews';
import Header from '@/Components/Shared/Header';
import Navbar from '@/Components/Shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;