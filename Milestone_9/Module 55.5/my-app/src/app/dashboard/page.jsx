'use client'
import React, { useState } from 'react';
// import HeavyChart from '../Components/HeavyChart';
import dynamic from 'next/dynamic';
const HeavyChart = dynamic(() => import('../Components/HeavyChart'), {
    loading: () => <p>Loading....</p>
})
const Dashboard = () => {
    const [showChart, setShowChart] = useState(false);
    return (
        <div>
            <h1 className='p-10'>Dashboard</h1>
            <button onClick={() => setShowChart(true)}>Show my chart</button>
            {
                showChart && <HeavyChart></HeavyChart>
            }
        </div>
    );
};

export default Dashboard;