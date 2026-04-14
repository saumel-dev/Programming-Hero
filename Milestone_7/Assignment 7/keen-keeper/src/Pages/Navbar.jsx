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