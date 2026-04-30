import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAveter from '@/assets/user.png'
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between text-center gap-4 text-gray-700'>
                <li>
                    <NavLink href='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink href='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink href='/career'>Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image
                    src={userAveter}
                    alt='user aveter'
                    width={60}
                    height={60}
                >

                </Image>
                <button className='btn bg-purple-500 text-white'>
                    <Link href='/login'>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;