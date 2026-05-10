const dns = require('node:dns');
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bookAppUser:wvMu642EDVhtdU2r@cluster0.qtp9hqs.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();
        const db = client.db('book-collection');
        const bookCollection = client.collection('books');
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        //  await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
})
