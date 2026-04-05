import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <>
            <Header></Header>
            {
                isNavigating && <span>loading.....</span> 
            }
            <Outlet></Outlet>
        </>
    );
};

export default Root;""
