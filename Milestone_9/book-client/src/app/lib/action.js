import { revalidatePath } from "next/cache";

export const deleteBook = async (id) => {
    const res = await fetch(`http://localhost:8000/books/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath('/books');
    }
    return data;
}

export const createBook = async (formData) => {
    const newBook = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8000/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    const data = await res.json();
    revalidatePath('/books');
    return data;
}

export const updateBook = async(bookId, formData) => {
    const updatedBook = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:8000/books/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateBook)
    })
    const data = await res.json();
    if (data.modifiedCount > 0) {
        revalidatePath('/users');
        redirect('/users')
    }
    return data;
}