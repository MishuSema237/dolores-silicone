const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

async function testConnection() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('MONGODB_URI not found');
        process.exit(1);
    }

    console.log('Testing connection to:', uri.split('@')[1]); // Log host part only for safety

    const client = new MongoClient(uri, {
        connectTimeoutMS: 5000,
        serverSelectionTimeoutMS: 5000
    });

    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
        const db = client.db();
        const collections = await db.listCollections().toArray();
        console.log('Collections:', collections.map(c => c.name));

        const adminUser = await db.collection('adminusers').findOne({});
        console.log('Found an admin user?', !!adminUser);
        if (adminUser) {
            console.log('Admin email:', adminUser.email);
        }
    } catch (err) {
        console.error('Connection failed:', err.message);
    } finally {
        await client.close();
        process.exit(0);
    }
}

testConnection();
