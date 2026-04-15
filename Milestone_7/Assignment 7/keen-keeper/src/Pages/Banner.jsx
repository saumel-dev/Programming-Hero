import React, { Suspense } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Await, Link, useLoaderData } from 'react-router';
import FriendsCard from './FriendsCard';

const Banner = () => {
    const friends = useLoaderData();

    return (
        <>
            <div className='container mx-auto text-center flex flex-col justify-center items-center mt-20 mb-10 space-y-4'>
                <h1 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h1>
                <p className='text-[#64748B]'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>
                <button className="flex items-center gap-1 px-3 py-1 rounded-md text-white bg-[#244D3F]">
                    <IoIosAdd />
                    Add a Friend
                </button>

                <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 mt-10'>
                    <div className='w-50 h-30 justify-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>10</h1>
                        <p className='text-[#64748B]'>Total Friends</p>
                    </div>
                    <div className='w-50 h-30 justify-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>3</h1>
                        <p className='text-[#64748B]'>On Track</p>
                    </div>
                    <div className='w-50 h-30 justify-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>6</h1>
                        <p className='text-[#64748B]'>Need Attention</p>
                    </div>
                    <div className='w-50 h-30 justify-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>12</h1>
                        <p className='text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <h1 className='text-xl font-bold text-center lg:text-start'>Your Friends</h1>
                <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                    <Await resolve={friends}>
                        {(resolvedFriends) => (
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 mt-4 mb-4'>
                                {resolvedFriends.map(friend => (
                                    <FriendsCard friend={friend} key={friend.id} />
                                ))}
                            </div>
                        )}
                    </Await>
                </Suspense>
            </div>
        </>
    );
};

export default Banner;