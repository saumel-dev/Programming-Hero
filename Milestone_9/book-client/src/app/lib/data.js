export const getBooks = async () => {
    const res = await fetch('http://localhost:8000/books', {
        cache: 'no-store'
    });
    const books = res.json();
    return books;
}