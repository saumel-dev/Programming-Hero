import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const allBooks = useLoaderData();
    const filteredBook = allBooks.find(books => id == books.bookId)
    const { bookName, author, image, category, tags, rating, review, totalPages, publisher, yearOfPublishing } = filteredBook;
    return (
        <div className='container mx-auto'>
            <div className='flex flex-row items-center gap-20'>
                <div>
                    <img
                        src={image}
                        className=" w-130 h-150 bg-base-200 p-5 rounded-xl shadow-2xl"
                    />
                </div>
                <div className='w-full space-y-4'>
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className='font-semibold'>By: {author}</p>
                    <div className='border-t border-gray-200'></div>
                    <p className='text-5 text-[#131313]'>{category}</p>
                    <div className='border-t border-gray-200'></div>
                    <p className='text-[#131313/70]'>{review}</p>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Tag:</p>
                        <div className='flex gap-2'>
                            {
                                tags.map((tag, index) => <div key={index} className="badge bg-green-100 font-bold text-green-400">{tag}</div>)
                            }
                        </div>
                    </div>
                    <div className='border-t border-gray-200'></div>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex gap-4'>
                            <p className='text-[#131313]/70'>Number of pages:</p>
                            <p className='font-bold'>{totalPages}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#131313]/70'>Publisher:</p>
                            <p className='font-bold'>{publisher}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#131313]/70'>Year of Publishing::</p>
                            <p className='font-bold'>{yearOfPublishing}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#131313]/70'>Rating::</p>
                            <p className='font-bold'>{rating}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <button className="btn">Mark as Read</button>
                        <button className="btn text-white bg-sky-400">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;