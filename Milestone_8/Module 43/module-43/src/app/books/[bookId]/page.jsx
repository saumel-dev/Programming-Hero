const BookDetailPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5003/books/${bookId}`);
    const { title, price, author } = await res.json();
    return (
        <div>
            <h2>Book name: {title} </h2>
            <h2>Book name: {price} </h2>
            <h2>Book name: {author} </h2>
        </div>
    );
};

export default BookDetailPage;