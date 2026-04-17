import React, { useContext } from 'react';
import { friendsContext } from '../Context/ContextProvider';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
const Stats = () => {
    const { call, text, video } = useContext(friendsContext);
    const data = [
        { name: 'Call', value: call.length },
        { name: 'Text', value: text.length },
        { name: 'Video', value: video.length }
    ];
    const isExist = call.length > 0 || text.length > 0 || video.length > 0;
    const COLORS = ['#244D3F', '#6366F1', '#3ba755'];
    return (
        <div className='container mx-auto'>
            <div className='mt-20'>
                <h1 className='font-bold text-5xl'>Friendship Analytics</h1>
            </div>
            <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-10 mt-5 mb-5'>
                <p className='text-[20px] text-[#244D3F]'>By Interaction Type</p>
                <div className='flex-grow flex items-center justify-center'>
                    {
                        isExist ? <div className='h-75 w-full'>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        innerRadius={90}
                                        outerRadius={120}
                                        paddingAngle={1}
                                        dataKey={'value'}
                                    >
                                        {
                                            data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))
                                        }
                                    </Pie>
                                    <Tooltip></Tooltip>
                                    <Legend verticalAlign='bottom' height={36}></Legend>
                                </PieChart>
                            </ResponsiveContainer>
                        </div> : <p className='text-gray-400 text-2xl'>No interactions logged yet.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Stats;