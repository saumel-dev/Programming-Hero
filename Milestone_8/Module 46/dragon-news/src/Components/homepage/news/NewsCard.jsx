import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaBookmark, FaEye } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';

const NewsCard = ({ news }) => {
    // console.log(news);

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <Image
                                src={news.author?.img}
                                width={30}
                                height={30}
                                alt={news.author?.name || 'author'}
                                className='rounded-full'
                            ></Image>
                            <h2 className='font-semibold'>{news.author?.name}</h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                        <div className='flex gap-3'>
                            <FaBookmark className='text-xl'></FaBookmark>
                            <IoMdShare className='text-xl'></IoMdShare>
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            height={300}
                            width={500}
                        >
                        </Image>
                    </figure>
                    <p className='text-[16px] line-clamp-3'>{news.details}</p>
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex gap-2 items-center'>
                            <h2 className='flex gap-2 items-center'>
                                <CiStar className='text-lg text-yellow-300'></CiStar>
                                {
                                news.rating.number
                            }</h2>
                            <h2 className='flex gap-2 items-center'>
                                <FaEye className='text-lg'></FaEye>
                                {
                                    news.total_view
                                }
                            </h2>
                        </div>
                        <div>
                            <Link href={`/news/${news._id}`}><button className='btn'>See details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;