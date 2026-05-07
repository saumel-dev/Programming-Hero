const express = require('express')
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hello from express js');
})
app.get('/users', (req, res) => {
    res.send('users are waking up');
})
app.listen(port, () => {
    console.log('server is running on port:', port);
})