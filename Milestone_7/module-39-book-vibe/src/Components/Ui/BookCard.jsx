import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-50'
                    src={book.image}
                    alt="Shoes" />
            </figure>
            <div className='flex items-center gap-2'>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">
                        {book.bookName}
                    </h2>
                    <p className='font-semibold text-lg'>{book.author}</p>

                    <div className="card-actions justify-end border-t border-dashed pt-4 border-gray-300">
                        {book.tags.map((tag, index) => <div key={index} className="font-bold badge badge-soft badge-success">{tag}</div>)}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;