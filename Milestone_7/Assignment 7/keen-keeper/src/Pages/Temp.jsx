import React from 'react';
import { LuBellRing, LuFileArchive } from 'react-icons/lu';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { TiBell } from 'react-icons/ti';

const Temp = () => {
    const tags = ['helo', 'helo']
    return (
        <div className='container mx-auto border my-20'>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <div className='flex flex-col space-y-3'>
                        <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md flex flex-col items-center w-60 space-y-2 py-4 px-5'>
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
                            <button className='flex items-center justify-center gap-2 font-semibold cursor-pointer w-60 px-4 py-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'><LuBellRing className='pt-0.5'></LuBellRing>Snooze 2 weeks</button>
                            <button className='flex items-center justify-center gap-2 font-semibold cursor-pointer w-60 px-4 py-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'><LuFileArchive></LuFileArchive>Archive</button>
                            <button className='flex text-red-500 items-center justify-center gap-2 font-semibold cursor-pointer w-60 px-4 py-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md'><MdOutlineDeleteForever></MdOutlineDeleteForever>Delete</button>
                        </div>
                    </div>
                </div>
                <div>   
                    next content here
                </div>
            </div>
            {/* I am temp */}
        </div>
    );
};

export default Temp;