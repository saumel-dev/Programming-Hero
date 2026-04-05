import React from 'react';
import { Link, NavLink } from 'react-router';
import './../../Components/Header/header.css'
const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobiles</NavLink>
                <NavLink to="/laptop">Laptops</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/users2">User2</NavLink>
                <NavLink to="/posts">Post</NavLink>
            </nav>
        </div>
    );
};

export default Header;