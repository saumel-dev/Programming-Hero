import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../BookContext/BookProvider';
import { useContext } from 'react';

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const { handleMarkasRead, storedBooks } = useContext(BookContext);
    const expectedBook = books.find((book) => book.bookId == bookId)
    if (!expectedBook) return <div>Book not found</div>;
    const { bookName, image, category } = expectedBook;
    return (
        <div>
            <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto">
                <figure className='items-center justify-center ml-100'>
                    <img className='h-[400px]'
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p className='py-2 border-y'>{category}</p>
                    <div className='flex flex-row gap-5'>
                        <button onClick={() => handleMarkasRead(expectedBook)} className='btn btn-primary'>Mark as Read</button>
                        <button className='btn btn-success text-white'>Add to Wishlist</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;