import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const Dashboard = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    console.log(session);
    const user = session?.user;
    if(!user)
    {
        redirect('/auth/signin')
        return <div>Please sign to access the dash board</div>
    }
    return (
        <div>

        </div>
    );
};

export default Dashboard;