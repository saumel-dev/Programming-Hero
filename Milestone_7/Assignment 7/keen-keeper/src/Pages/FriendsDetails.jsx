import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendsDetails = () => {
    const { id } = useParams();
    const friend = useLoaderData();
    const filteredFriend = friend.filter(friend => friend.id == id)

    return (
        <div>
            Here is my details
        </div>
    );
};

export default FriendsDetails;