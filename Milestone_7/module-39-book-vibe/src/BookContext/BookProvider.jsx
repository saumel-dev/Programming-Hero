import React, { createContext, useState } from 'react';
export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const handleMarkasRead = (currentbook) => {

        const isExistBook = storedBooks.find(book => book.bookId === currentbook.bookId);
        if (isExistBook) {
            alert('the book is already exist');
        }
        else {
            setStoredBooks([...storedBooks, currentbook])
        }
    }
    const data = { storedBooks, setStoredBooks, handleMarkasRead };
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;