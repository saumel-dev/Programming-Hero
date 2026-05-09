const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://simpleCrudUser:Lp6lbhDMKS1lzq0e@cluster0.qtp9hqs.mongodb.net/?appName=Cluster0`;

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

        const db = client.db("simple-crud");
        const userCollection = db.collection("users");

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            // console.log('user id', id);
            const query = {
                // _id : id // won't work cause it's saved as object id
                _id: new ObjectId(id)
            }
            const user = await userCollection.findOne(query);
            res.send(user);
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id)
            }
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })

        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        app.patch('/users/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {
                _id: new ObjectId(id)
            }
            const modifiedUser = req.body;
            const updatedDocument = {
                $set: {
                    name: modifiedUser.name,
                    email: modifiedUser.email,
                    role: modifiedUser.role
                }
            }
            const result = await userCollection.updateOne(filter, updatedDocument);
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB");
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Simple CRUD server running on port ${port}`);
})
