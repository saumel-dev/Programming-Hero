import React, { useState } from 'react';
import { NavLink } from 'react-router';
import ReadList from './ReadList';
import WishList from './WishList';

const ListedBook = () => {
    const [activeTab, setActiveTab] = useState('readlist');
    return (
        <div className='mt-20'>
            <div className="tabs tabs-box flex gap-4 justify-center">
                <button onClick={() => setActiveTab('readlist')} className='btn'>Readlist</button>
                <button onClick={() => setActiveTab('wishlist')} className='btn'>Wishlist</button>
            </div>
            {
                activeTab === 'readlist'? <ReadList></ReadList> : <WishList></WishList>
            }
        </div>
    );
};

export default ListedBook;