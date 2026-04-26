import BooksCard from '@/Components/BooksCard';
import React from 'react';

const BooksPage = async () => {
    const res = await fetch('http://localhost:5003/books', { next: { revalidate: 10 } });
    const books = await res.json();
    return (
        <div>
            <h1>Books: {books.length}</h1>
            <div className='grid grid-cols-4 justify-items-center gap-4'>
                {
                    books.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;