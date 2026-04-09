import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContextProvider';
import ListCard from './ListCard';

const ReadList = () => {
    const { readList, setReadList } = useContext(BookContext);
    console.log(readList);

    return (
        <div className='container mx-auto space-y-5 my-5'>
            {
                readList.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
            }
        </div>

    );
};

export default ReadList;