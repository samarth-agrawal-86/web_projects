const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://myAtlasDBUser:myatlas-001@myatlasclusteredu.hdswaho.mongodb.net/?retryWrites=true&w=majority';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const dbName = 'bank';

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log(`Connected to the database ${dbName}`);
  } catch (error) {
    console.log(`Unable to connect to the database ${dbName}`);
  }
}
async function listDatabases(client) {
  dblist = await client.db().admin().listDatabases();
  console.log(dblist);
  console.log('Databases:');
  dblist.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

main();
