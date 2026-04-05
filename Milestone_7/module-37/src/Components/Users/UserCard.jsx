import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails.2/UserDetails2';

const UserCard = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json());

    const [showInfo, setShowInfo] = useState(false);
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{ showInfo ? 'hide' : 'show'} info</button>
            {
                showInfo && <Suspense fallback={<span>loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default UserCard;