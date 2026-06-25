import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigationData = [
        {
            id: 1,
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            id: 2,
            name: "Projects",
            path: "/projects"
        },
        {
            id: 3,
            name: "Issues",
            path: "/issues"
        },
        {
            id: 4,
            name: "Marketplace",
            path: "/market"
        },
        {
            id: 5,
            name: "Settings",
            path: "/settings"
        }
    ];

    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>);
    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 ${open?'top-8': '-top-40'} bg-amber-200`}>
                    {links}
                </ul>
            </span>

            <h3 className='ml-4'>My Navbar</h3>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            {/* {
                    navigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                } */}
            {/* <ul className='flex gap-4'>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;