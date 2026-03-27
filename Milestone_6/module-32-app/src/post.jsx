import { use } from "react"
import Feed from "./showpost";
export default function Posts({ postPromise }) {
    const post = use(postPromise);
    return (
        <>
            <div className="card">
                <h4>Posts: {post.length}</h4>
                {
                    post.map(post => <Feed post={post}></Feed>)
                }
            </div>
        </>
    )
}