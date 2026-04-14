import React from 'react';

const FriendsCard = ({ friend }) => {
    const { name, picture, status, tags,
        days_since_contact
    } = friend;
    const statusStyle = status == 'On-Track'? 'bg-[#244D3c] text-white font-bold':
    status == 'Overdue'? 'bg-red-500 text-white font-bold':
    status == 'Almost Due'? 'bg-yellow-400 text-[#244D3F] text-white font-bold':'';
    return (
        <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md flex flex-col items-center w-60 space-y-2 py-4 px-5'>
            <img className='w-15 rounded-full' src={picture} alt="" />
            <p className='font-bold'>{name}</p>
            <p className='text-[12px] text-[#64748B]'>{days_since_contact}d ago</p>
            <div className='flex flex-row gap-2'>
                {
                    tags.map((tag, index) => <p key={index} className='rounded-xl px-2 text-[13px] bg-green-100 text-green-500 font-bold'>{tag.toUpperCase()}</p>)
                }
            </div>
            <p className={`${statusStyle} rounded-xl text-[12px] px-2 py-0.5`}>{status}</p>
        </div>
    );
};

export default FriendsCard;