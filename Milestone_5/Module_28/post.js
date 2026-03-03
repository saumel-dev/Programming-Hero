const url = 'https://jsonplaceholder.typicode.com/posts';
const loadpost = () =>{
    fetch(url)
    .then(response => response.json())
    .then(json => {
        displayPost(json);
    });
}
const displayPost = (posts) =>{
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ""
    posts.forEach(post => {
        //id, title, body
        const div = document.createElement('div');
        div.className = 'post-card';
        div.innerHTML = `
            <h1>${post.id}</h1>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `
        postContainer.appendChild(div);
    });
}