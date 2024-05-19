import pkg from "dotenv";
import { MongoClient } from "mongodb";
const { config } = pkg;
var mongoClient;
import { createRoot } from "react-dom/client";


config();
/**
 * Connect to MongoDB
 * @param {*} uri 
 * @returns 
 */
export async function connectToCluster(uri) {
  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");

    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}

