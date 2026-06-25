const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
// middleware
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello from express js');
})

const users = [
    { id: 1, name: 'Jhon Doe', email: 'jhon@example.com' },
    { id: 2, name: 'Jane Doe', email: 'Jane@example.com' },
    { id: 3, name: 'Jim Doe', email: 'Jim@example.com' }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('data in the request', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send({ success: true, data: newUser, message: 'post method is working' });

})

app.get('/products', (req, res) => {
    res.send('products are jumping up and up');
})

app.listen(port, () => {
    console.log('server is running on port:', port);
})