import React from 'react';
import { NavLink } from 'react-router';

const ListedBook = () => {
    return (
        <div className='mt-20'>
            <div class="tabs tabs-box flex gap-4 justify-center">
                <NavLink>ReadList</NavLink>
                <NavLink>WishList</NavLink>
            </div>
        </div>
    );
};

export default ListedBook;