export const GetPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json();
    }
    catch (err) {
        throw new Error('Something went wrong!!! try again Later')
    }

};
export const GetSinglePost = async ({ id }) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json();
    }
    catch (err) {
        throw new Error('Something went wrong!!! try again Later')
    }
}