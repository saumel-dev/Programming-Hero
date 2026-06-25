import React from 'react';
import { getBooks } from '../lib/data';
import BooksTable from '@/Components/BooksTable';

const BooksPage = async () => {

    const books = await getBooks();
    console.log(books);
    return (
        <div className='container mx-auto mt-20'>
            <h3>Books: {books.length}</h3>
            <BooksTable books={books}></BooksTable>
        </div>
    );
};

export default BooksPage;