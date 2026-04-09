import Link from 'next/link';
import React from 'react';

const blogs = [
    {
        "id": 1,
        "title": "The Art of Minimalist Web Design",
        "author": "Elena Vance",
        "published_date": "2026-03-15",
        "category": "Design",
        "summary": "Exploring why less is often more in modern UI/UX and how to strip away the noise.",
        "tags": ["UX", "Minimalism", "Frontend"]
    },
    {
        "id": 2,
        "title": "Demystifying Quantum Computing",
        "author": "Dr. Aris Thorne",
        "published_date": "2026-03-22",
        "category": "Technology",
        "summary": "A beginner's guide to qubits, superposition, and why your laptop isn't obsolete just yet.",
        "tags": ["Quantum", "FutureTech", "Physics"]
    },
    {
        "id": 3,
        "title": "The Rise of Urban Gardening",
        "author": "Marcus Green",
        "published_date": "2026-04-02",
        "category": "Lifestyle",
        "summary": "How city dwellers are turning fire escapes and balconies into lush, edible oases.",
        "tags": ["Sustainability", "Gardening", "CityLife"]
    },
    {
        "id": 4,
        "title": "Deep Dive into Async/Await",
        "author": "Sarah Jenkins",
        "published_date": "2026-04-08",
        "category": "Programming",
        "summary": "Mastering asynchronous patterns in JavaScript to write cleaner, more readable code.",
        "tags": ["JavaScript", "Programming", "WebDev"]
    }
];

const BlogsPage = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-4'>Blogs</h2>
            {
                blogs.map(blog => <div key={blog.id}>
                    <h3 className='text-4xl font-bold mb-2'>{blog.title}</h3>
                    <Link href={`/blogs/${blog.id}`}>Show Details</Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;