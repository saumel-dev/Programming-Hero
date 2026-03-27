

export default function Feed({post}) {
    return(
        <div className="card">
            <h3>Post title: {post.title} </h3>
            <p>Post description: {post.body}</p>
        </div>
    )
}