const person = {
    name: 'sabiha',
    age: 24
}
const personJson = JSON.stringify(person);
console.log(person);
console.log(personJson);
const personObj = JSON.parse(personJson);
console.log(personObj);

const toggle = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
};

const loadpost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(post => {
        console.log(post);
        displayPost(post);
    })
};

const displayPost = (posts) => {
    posts.forEach(post => {
        console.log(post);
        
    });
    
}