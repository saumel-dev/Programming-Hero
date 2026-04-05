import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './root.css'
const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <>
            <Header></Header>
            <div className='root-main'>
                <aside>
                    <Sidebar></Sidebar>
                </aside>
                {
                    isNavigating && <span>Loading...</span>
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;