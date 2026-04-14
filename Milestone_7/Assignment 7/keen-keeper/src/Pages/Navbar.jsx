import React from 'react';
import './style.css'
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { MdAccessTime } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex px-15">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <h1 className="text-2xl font-bold">Keen<span className='green'>Keeper</span></h1>
                </div>
                <div className="navbar-end flex gap-5">
                    <NavLink className="flex items-center gap-1" to="/"><IoHomeOutline></IoHomeOutline> Home</NavLink>
                    <NavLink className="flex items-center gap-1" to="/timeline"><MdAccessTime></MdAccessTime> Timeline</NavLink>
                    <NavLink className="flex items-center gap-1" to="/stats"><ImStatsDots></ImStatsDots> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;