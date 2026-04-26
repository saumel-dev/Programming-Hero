import React from 'react';

const BookLoading = () => {
    return (
        <div className='flex justify-center items-center'>
            <h2>Loading book details</h2>
            <span class="loading loading-spinner loading-md"></span>
        </div>
    );
};

export default BookLoading;