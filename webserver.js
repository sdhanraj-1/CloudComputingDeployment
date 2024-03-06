const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();

// Retrieve environment variables or use default values
const mongoHost = process.env.MONGO_HOST || 'mongodb_host';
const mongoPort = process.env.MONGO_PORT || 27017;
const dbName = process.env.DB_NAME || 'your_database_name';
const collectionName = process.env.COLLECTION_NAME || 'mycollection'; // Use environment variable for collection name
const webServicePort = process.env.WEB_SERVICE_PORT || 8080;

// Construct MongoDB connection URL
const url = `mongodb://${mongoHost}:${mongoPort}`;

async function connectToMongoDB() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Retrieve the first 10 documents
    const documents = await collection.find().limit(10).toArray();

    // Print each document
    documents.forEach(doc => {
      console.log(doc);
    });

  } finally {
    // No need to close the connection here as Express will handle it
  }
}

connectToMongoDB();

// Serve HTML file
app.get('/', (req, res) => {
  // Pass the fetched documents to the HTML template
  res.sendFile(__dirname + '/index.html', { documents });
});

// Start the server on localhost with the specified port
const server = app.listen(webServicePort, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${webServicePort}`);
});
