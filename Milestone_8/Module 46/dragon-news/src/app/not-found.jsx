import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex gap-4 h-[80vh] justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl text-red-500'>This page is not found</h2>
            <Link href='/'>
            <button className='btn btn-error'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;