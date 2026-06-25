import React from 'react';

const Link = ({ route }) => {
    return ( 
        <li className='mr-10 px-4 lg:mr-10 text-black hover:bg-gray-50'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;