import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[80vh] justify-center items-center'>
            <span className="loading loading-spinner text-warning"></span>
        </div>
    );
};

export default LoadingPage;