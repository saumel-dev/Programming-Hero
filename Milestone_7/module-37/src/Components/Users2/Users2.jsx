import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    
    return (
        <div>
            <h1>User 2 with suspense data load</h1>
            <p>Total user: {users.length}</p>
        </div>
    );
};

export default Users2;