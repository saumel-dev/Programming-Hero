import React from 'react';

const ListCard = ({ book }) => {
    const { bookName, author, image, category, tags, rating, review, totalPages, publisher, yearOfPublishing } = book;
    console.log(book);

    return (
        <div>
            <div className='bg-base-200 flex flex-col gap-5 justify-center p-5 rounded-xl '>
                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="card-body flex flex-row items-center gap-10 py-5">
                        <img className='w-27' src={image} alt="" />
                        <div className='flex-1'>
                            <h2 className="card-title font-bold">{bookName}</h2>
                            <p className='font-semibold'>by: {author}</p>
                            <div className='flex flex-row gap-4'>
                                <p className='font-bold'>Tag: </p>
                                {
                                    tags.map((tag, index) => <div key={index} className="badge bg-green-100 font-bold text-green-400">{tag}</div>)
                                }
                                <p>Year of Publishing: {yearOfPublishing}</p>
                            </div>
                            <div className='flex flex-row'>
                                <p>Publisher: {publisher}</p>
                                <p>Page {totalPages}</p>
                            </div>
                            <div className='border-t w-full'></div>
                            <div className="justify-start card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                <button className="btn btn-primary">Buy Now</button>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCard;