const { MongoClient } = require('mongodb');

// MongoDB connection details
const username = 'adminUser';
const password = 'cloudcomputingrocks';
const hostname = process.env.MONGODB_HOST || '34.130.143.13';
const port = process.env.MONGODB_PORT || 27017;
const databaseName = process.env.MONGODB_DB || 'ece9016-db';  

const uri = `mongodb://${username}:${password}@${hostname}:${port}`;
const docs = [];

const express = require('express');
const app = express();
const port_node = 80;

// Define a route handler for the root path
app.get('/', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db(databaseName);
        const collection = database.collection('name-age'); // Specify your collection name

        // Retrieve the first 1000 documents
        const documents = await collection.find().limit(10).toArray();

        // Print each document (optional)
        documents.forEach(doc => {
            console.log(doc);
            docs.push(doc);
        });

        res.send('Hello World!'+docs[0].name);

    } finally {
        console.log('Closing the connection');
        await client.close();
    }
    

});

// Start the server
app.listen(port_node, () => {
  console.log(`Server running at http://localhost:${port_node}`);
  
});

// Connect to MongoDB
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function fetchJS() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db(databaseName);
        const collection = database.collection('name-age'); // Specify your collection name

        // Retrieve the first 1000 documents
        const documents = await collection.find().limit(10).toArray();

        // Print each document (optional)
        documents.forEach(doc => {
            console.log(doc);
            docs.push(doc);
        });

    } finally {
        console.log('Closing the connection');
        await client.close();
    }


}


