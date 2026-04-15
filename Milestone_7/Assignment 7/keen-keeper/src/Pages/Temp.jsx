import React from 'react';
import { LuBellRing, LuFileArchive } from 'react-icons/lu';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { TiBell } from 'react-icons/ti';
import Phonecall from './../assets/Phonecall.png'
import text from './../assets/text.png'
import video from './../assets/video.png'
const Temp = () => {
    const tags = ['helo', 'helo']
    return (
        <div className='container mx-auto my-20'>
            <div className='flex flex-row justify-center gap-5'>
                <div>
                    <div className='flex flex-col space-y-3'>
                        <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md flex flex-col items-center w-70 space-y-2 py-4 px-5'>
                            <img className='w-15 rounded-full' src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds" alt="" />
                            <p className='font-bold'>Emma Wilson</p>
                            <p className={` rounded-xl text-[12px] px-2 py-0.5`}>Overdue</p>
                            <div className='flex flex-row gap-2'>
                                {
                                    tags.map((tag, index) => <p key={index} className='rounded-xl px-2 text-[13px] bg-green-100 text-green-500 font-bold'>{tag.toUpperCase()}</p>)
                                }
                            </div>
                            <p className='text-[#64748B] text-[12px]'>"Former colleague, great mentor"</p>
                            <p className='text-[#64748B] text-[10px]'>Preferred: email</p>
                        </div>
                        <div className='flex flex-col items-start space-y-3'>
                            <button className='flex items-center justify-center gap-2 font-semibold cursor-pointer w-full h-10 px-4 py-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'><LuBellRing className='pt-0.5'></LuBellRing>Snooze 2 weeks</button>
                            <button className='flex items-center justify-center gap-2 font-semibold cursor-pointer w-full h-10 px-4 py-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'><LuFileArchive></LuFileArchive>Archive</button>
                            <button className='flex text-red-500 items-center justify-center gap-2 font-semibold cursor-pointer w-full h-10 px-4 py-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'><MdOutlineDeleteForever></MdOutlineDeleteForever>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='grid grid-cols-3 gap-10'>
                        <div className='w-50 h-30 justify-center items-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                            <h1 className='text-[#244D3F] text-3xl font-bold'>12</h1>
                            <p className='text-[#64748B]'>Interactions This Month</p>
                        </div>
                        <div className='w-50 h-30 justify-center items-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                            <h1 className='text-[#244D3F] text-3xl font-bold'>12</h1>
                            <p className='text-[#64748B]'>Interactions This Month</p>
                        </div>
                        <div className='w-50 h-30 justify-center items-center flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'>
                            <h1 className='text-[#244D3F] text-3xl font-bold'>12</h1>
                            <p className='text-[#64748B]'>Interactions This Month</p>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 card-sm shadow-sm">
                            <div className="card-body shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                                <div className="flex justify-between card-actions">
                                    <h2 className="card-title text-xl">Relationship Goal</h2>
                                    <button className="btn">Edit</button>
                                </div>
                                <p className='text-[18px]'> <span className='text-[#64748B]'>Connect every</span><span className='font-bold'> 30 days</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 card-sm shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                            <div className="card-body">
                                <div className="card-actions">
                                    <h2 className="card-title text-xl text-[#244D3F]">Quick Check-In</h2>
                                </div>
                                <div className='flex justify-around mt-5'>
                                    <div>
                                        <button className='btn w-35 h-20 text-[18px] flex flex-col'>
                                            <img src={Phonecall} className='w-8' alt="" />
                                            Call</button>
                                    </div>
                                    <div>
                                        <button className='btn w-35 h-20 text-[18px] flex flex-col'>
                                            <img src={text} className='w-8' alt="" />
                                            Text</button>
                                    </div>
                                    <div>
                                        <button className='btn w-35 h-20 text-[18px] flex flex-col'>
                                            <img src={video} className='w-8' alt="" />
                                            Video</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temp;