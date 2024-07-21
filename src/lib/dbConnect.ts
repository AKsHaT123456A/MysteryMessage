import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    const db = await mongoose.connect((process.env.MONGODB_URI||"mongodb://localhost:27017" + "/mystrymessage"), {
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("DB connection established");
  } catch (error) {
    console.log("DB connection error", error);
    process.exit(1);
  }
}

export default dbConnect;
