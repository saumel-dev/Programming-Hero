import React from 'react';
import { Navigate, NavLink, Outlet, useNavigation } from 'react-router';
import './root.css'
const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div className='root-style'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="expense">Expense</NavLink>
                <NavLink to="budget">Budget</NavLink>
            </nav>
            {
                isNavigating && <p>Loading.........</p>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Root;