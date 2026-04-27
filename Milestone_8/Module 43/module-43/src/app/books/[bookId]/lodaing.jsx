export const generateStaticParams = async() => {
    const res = await fetch('http://localhost:5003/books');
    const books = await books.json();

    return books.map(book => ({
        bookId: book.id
    }))
}
const BookLoading = () => {
    return (
        <div className='flex justify-center items-center'>
            <h2>Loading book details</h2>
            <span class="loading loading-spinner loading-md"></span>
        </div>
    );
};

export default BookLoading;