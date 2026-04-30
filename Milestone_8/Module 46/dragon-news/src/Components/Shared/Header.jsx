import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format, compareAsc } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image className='mx-auto'
                src={logo}
                width={300}
                height={300}
                alt='logo'
                style={{ height: 'auto' }}
                priority
            ></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(2014, 1, 11), "EEEE, MMM dd, yyyy")}</p>

        </div>
    );
};

export default Header;