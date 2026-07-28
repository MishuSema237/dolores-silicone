import { MongoClient, Db } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  var _mongoClient: MongoClient | undefined;
}

function getMongoClient(): MongoClient {
  if (global._mongoClient) return global._mongoClient;

  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(MONGODB_URI);
    }
  } else {
    global._mongoClient = new MongoClient(MONGODB_URI);
  }

  return global._mongoClient;
}

function getDb(dbName?: string): Db {
  const client = getMongoClient();
  return client.db(dbName);
}

const clientProxy = new Proxy({} as MongoClient, {
  get(_target, prop) {
    if (prop === "db") {
      return getDb;
    }
    const client = getMongoClient();
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

const clientPromiseProxy = new Proxy({} as Promise<MongoClient>, {
  get(_target, prop) {
    const promise = Promise.resolve(getMongoClient());
    if (prop === "then") {
      return promise.then.bind(promise);
    }
    return (promise as any)[prop];
  },
});

export const client = clientProxy;
export default clientPromiseProxy;
