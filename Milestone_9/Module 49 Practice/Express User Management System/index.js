const express = require('express');
const app = express();
const port = 5000;

const users = [
    {id: 1, name: 'Jhon doe', email: 'Jhon@example.com'},
    {id: 1, name: 'Jane doe', email: 'Jane@example.com'},
    {id: 1, name: 'Jen doe', email: 'Jen@example.com'}
]
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/about', (req, res) => {
    res.send('I am on the about route');
})

app.get('/data', (req, res) => {
    res.send('I am on data route');
})
app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
})