import { GetPosts, GetSinglePost } from "../lib/api";

const PostPage = async () => {
    const posts = await GetPosts();
    console.log(posts);
    const post = await GetSinglePost({id: 3});
    console.log(post);
    
    return (
        <div>
            <h2>Post are comming soon</h2>
        </div>
    );
};

export default PostPage;