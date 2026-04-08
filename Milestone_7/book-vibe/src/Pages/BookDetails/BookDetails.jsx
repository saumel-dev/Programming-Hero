import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContextProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';
const BookDetails = () => {
    const { id } = useParams();
    const allBooks = useLoaderData();
    const filteredBook = allBooks.find(books => id == books.bookId)
    const { bookName, author, image, category, tags, rating, review, totalPages, publisher, yearOfPublishing } = filteredBook;
    const { readList, setReadList, wishList, setWishList } = useContext(BookContext);
    const handleReadList = () => {
        const isExist = readList.find(book => book.bookId == filteredBook.bookId)
        const isExistinWishlist = wishList.find(book => book.bookId == filteredBook.bookId)
        if (isExist) {
            toast.error('Book Already Exist in the Read List');
        }
        else if (isExistinWishlist) {
            toast.error('Book Exist in the Wish List');
        }
        else {
            toast.success('Book Added into the Read List')
            setReadList([...readList, filteredBook]);
        }
    }
    const handleWishList = () => {
        const isExist = wishList.find(book => book.bookId == filteredBook.bookId);
        const isExistinReadlist = readList.find(book => book.bookId == filteredBook.bookId)
        if (isExist) {
            toast.error('Book Already Exist in the Wish List');
        }
        else if (isExistinReadlist) {
            toast.error('Book Exist in the Read List');
        }
        else {
            toast.success('Book Added into the Wish List')
            setWishList([...wishList, filteredBook]);
        }
    }

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-20'>
                <div>
                    <img
                        src={image}
                        className=" mt-30 md:mt-0 md:w-130 md:h-150 bg-base-200 p-5 rounded-xl shadow-2xl"
                    />
                </div>
                <div className='w-full space-y-4 text-center p-20 md:p-0 md:text-start'>
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className='font-semibold'>By: {author}</p>
                    <div className='border-t border-gray-200'></div>
                    <p className='text-5 text-[#131313]'>{category}</p>
                    <div className='border-t border-gray-200'></div>
                    <p className='text-[#131313/70]'>{review}</p>
                    <div className='flex gap-3 justify-center md:justify-start'>
                        <p className='font-bold'>Tag:</p>
                        <div className='flex gap-2'>
                            {
                                tags.map((tag, index) => <div key={index} className="badge bg-green-100 font-bold text-green-400">{tag}</div>)
                            }
                        </div>
                    </div>
                    <div className='border-t border-gray-200'></div>
                    <div className='flex flex-col space-y-2 items-center md:items-start'>
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
                    <div className='flex gap-2 justify-center md:justify-start'>
                        <button className="btn" onClick={() => handleReadList()}>Mark as Read</button>
                        <button onClick={() => handleWishList()} className="btn text-white bg-sky-400">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;