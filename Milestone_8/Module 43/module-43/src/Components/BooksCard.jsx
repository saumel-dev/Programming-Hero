import Link from 'next/link';
import React from 'react';

const BooksCard = ({ book }) => {
    const { title, author, genre } = book;
    return (
        <div>
            <div className="card w-96 bg-sky-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p></p>
                    <p>{author}</p>
                    <p>{genre}</p>
                    <div className="justify-end card-actions">
                        <Link href={`/books/${book.id}`}><button className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;