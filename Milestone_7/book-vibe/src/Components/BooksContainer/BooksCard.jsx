import React, { useContext } from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';
import { BookContext } from '../../Context/BookContextProvider';

const BooksCard = ({ book }) => {
    const { bookId, bookName, author, image, category, tags, rating } = book;
    
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-90 h-auto shadow-sm rounded-xl">
                <figure className='bg-base-300 m-5'>
                    <img className='max-w-60 max-h-50 p-5  m-5'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className='flex gap-5 pl-6'>
                    {
                        tags.map((tag, index) => <div key={index} className="badge bg-green-100 font-bold text-green-400">{tag}</div>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {bookName}
                    </h2>
                    <p className='font-semibold'>by: {author}</p>
                    <div className='border-t border-dashed border-base-400'></div>
                    <div className='flex justify-between'>
                        <div>{category}</div>
                        <div className='flex items-center gap-1 justify-center'>{rating} <CiStar className='text-[20px]'></CiStar></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;