import React, { useContext, useState } from 'react';
import { friendsContext } from '../Context/ContextProvider';
import PhonecallIcon from './../assets/Iconcall.png'
import textIcon from './../assets/Icontext.png'
import videoIcon from './../assets/Iconvideo.png'
const Timeline = () => {
    const { call, text, video, allBtn } = useContext(friendsContext);
    const [filter, setFilter] = useState('Filter timeline');
    const getList = () => {
        if (filter === 'Text') return text;
        else if (filter === 'Call') return call;
        else if (filter === 'Video') return video;
        else return allBtn;
    }
    const list = getList();

    return (
        <>
            <div className='container mx-auto mt-20'>
                <div className='flex flex-col items-center xl:items-start'>
                    <h1 className='font-bold text-5xl'>Timeline</h1>
                    <div className='mt-6'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">{filter}</div>
                            <ul tabIndex="-1" className="w-60 dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
                                <li onClick={() => setFilter('Call')}><a>Call</a></li>
                                <li onClick={() => setFilter('Text')}><a>Text</a></li>
                                <li onClick={() => setFilter('Video')}><a>Video</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto my-6'>
                <div className='flex flex-col gap-2'>
                    {
                        list.length == 0 || allBtn.length == 0 ? <h1 className='text-2xl text-center mt-15'>No Data Found</h1> : list.map((people, index) => <div key={index} className="flex flex-row rounded-xl px-5 items-center w-full h-20 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                            <div className='flex flex-row gap-3'>
                                <img src={`${filter === 'Text' ? textIcon : filter === 'Call' ? PhonecallIcon : filter === 'Video' ? videoIcon : ''}`} className='w-9' alt="" />
                                <h2 className="text-[#64748B]"><span className='text-[19px] font-semibold text-[#244D3F]'>{filter}</span> with {people.name}</h2>
                                <p></p>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </>
    );
};

export default Timeline;