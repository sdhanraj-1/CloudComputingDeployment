// Import required modules
const { MongoClient } = require('mongodb');

const username = 'adminUser';
const password = 'cloudcomputingrocks';
const hostname = '35.203.43.56';
const port = '27017';
const databaseName = 'ece9016-db';
const docs = [];
const mongo_uri = `mongodb://${username}:${password}@${hostname}:${port}`;
const client = new MongoClient(mongo_uri, { useUnifiedTopology: true });
const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const database = client.db(databaseName);
    const collection = database.collection('realestate-db'); // Specify your collection name

    // Retrieve the first 1000 documents
    const documents = await collection.find().limit(10).toArray();

    // Print each document (optional)
    documents.forEach(doc => {
      console.log(doc);
        docs.push(doc);
    });

    return docs;
} finally {
    console.log('Closing the connection');
    await client.close();
}
};

export default connectDB;
