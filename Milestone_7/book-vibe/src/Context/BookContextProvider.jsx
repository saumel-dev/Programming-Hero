import React, { createContext, useState } from 'react';

export const BookContext = createContext();
const BookContextProvider = ({ children }) => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const data = {
        readList, setReadList, wishList, setWishList
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};
export default BookContextProvider;