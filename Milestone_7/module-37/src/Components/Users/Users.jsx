import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router';
import UserCard from './UserCard';

const Users = () => {
    const users = useLoaderData();
    // console.log(user);
    return (
        <div>
            <h1>This is user page</h1>
            <div>
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Users;