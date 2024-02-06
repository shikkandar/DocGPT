import { connect, disconnect } from "mongoose";
const MONGODB_URI = process.env.MONGODB_CONNECTION_URI;

const connectToDatabase = async () => {
  try {
    await connect(MONGODB_URI, {
      dbName: "user",
    });
  } catch (error) {
    throw new Error("MongoDB connection failed");
  }
};

const disconnectToDatabase = async () => {
  try {
    await disconnect();
  } catch (error) {
    throw new Error("MongoDB disconnected");
  }
};

export { connectToDatabase, disconnectToDatabase };
