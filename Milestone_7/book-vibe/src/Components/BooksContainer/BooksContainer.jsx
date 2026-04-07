import React, { use } from 'react';
import BooksCard from './BooksCard';

const booksPromise = fetch('/public/booksData.json')
    .then(res => res.json())

const BooksContainer = () => {
    const books = use(booksPromise);
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-center font-bold text-3xl'>Books</h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 mt-10'>
                {
                    books.map((book) => <BooksCard key={book.bookId} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default BooksContainer;