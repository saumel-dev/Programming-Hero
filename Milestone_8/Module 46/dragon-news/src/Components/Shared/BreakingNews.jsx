import React from 'react';
import Marquee from "react-fast-marquee";

const news = [
    {
        id: '1',
        title: 'Breaking News: Major Event Unfolds in the City'
    },
    {
        id: '2',
        title: 'Breaking News: New Policy Announced by the Government'
    },
    {
        id: '3',
        title: 'Breaking News: Sports Team Wins Championship'
    }
    
]
const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200 py-4 px-2 rounded-xl container mx-auto'>
            <button className='btn bg-pink-400 rounded-xl text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(news_ => <p key={news_.id}>{news_.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;