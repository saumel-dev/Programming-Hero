import React from 'react';
import { NavLink } from 'react-router';
import './navbar.css'
const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-5">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to="/listedbook">Listed Books</NavLink>
                            <NavLink to="/toread">Pages to Read</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-3xl"><span className='text-green-500'>Book</span> Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to="/listedbook">Listed Books</NavLink>
                        <NavLink to="/toread">Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <a className="bg-sky-500 cursor-pointer text-white text-md font-bold rounded-md">SignIn</a>
                    <a className="bg-amber-500 cursor-pointer text-white text-md font-bold rounded-md">SignOut</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;