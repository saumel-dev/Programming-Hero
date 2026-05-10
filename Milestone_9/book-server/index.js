const dns = require('node:dns');
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://bookAppUser:wvMu642EDVhtdU2r@cluster0.qtp9hqs.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    await client.connect();
    const db = client.db('book-collection');
    const bookCollection = db.collection('books');

    app.get('/books', async (req, res) => {
        const books = await bookCollection.find().toArray();
        res.send(books);
    })

    app.get('/books/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const book = await bookCollection.findOne(query);
        res.send(book);
    })

    app.post('/books', async (req, res) => {
        const newBook = req.body;
        const result = await bookCollection.insertOne(newBook);
        res.send(result);
    })
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})