import React from 'react';
import './style.css'
import facebook from './../assets/facebook.png'
import instagram from './../assets/instagram.png'
import twitter from './../assets/twitter.png'
const Footer = () => {
    return (
        <div className='green-bg flex'>
            <div className='container mx-auto'>
                <div className='text-center text-white pt-20 space-y-4'>
                    <h1 className='text-7xl font-bold'>KeenKeeper</h1>
                    <p className='text-[#b3bab6]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='flex justify-center flex-col'>
                        <p className='text-[17px]'>Social Links</p>
                        <div className='flex justify-center gap-3 mt-2'>
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                    <div className='border-t border-[#225e3c]'></div>
                    <div className='flex flex-col md:flex-row justify-between text-[#b3bab6]'>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className='flex flex-row justify-center gap-3 mb-5'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;