import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaBookmark, FaEye } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';

export const generateMetaData = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return {
        title: news.title,
        description: news.details.slice(0, 160), // Descriptions are best kept under 160 chars
    };
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    console.log(news);

    return (
        <div className='max-w-5xl mx-auto my-8 card'>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={news.author?.img}
                            width={30}
                            height={30}
                            alt={news.author?.name}
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
                        alt="blank"
                        height={300}
                        width={500}
                    >
                    </Image>
                </figure>
                <p className='text-[16px]'>{news.details}</p>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex gap-2 items-center'>
                        {/* <h2 className='flex gap-2 items-center'>
                            <CiStar className='text-lg text-yellow-300'></CiStar>
                            {
                                news.rating.number
                            }</h2> */}
                        <h2 className='flex gap-2 items-center'>
                            <FaEye className='text-lg'></FaEye>
                            {
                                news.total_view
                            }
                        </h2>
                    </div>
                    <div>
                        <Link href={`/category/${news.category_id}`}><button className='btn bg-purple-500'>See other news in this category</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;