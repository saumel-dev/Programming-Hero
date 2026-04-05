import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='nav'>
             <NavLink to="/countries">Countries</NavLink>
             <NavLink to="/">Home</NavLink>
        </div>
    );
};

export default Header;