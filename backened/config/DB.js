import mongoose from "mongoose";

let isConnected; // track the connection state

async function ConnectDB() {
    if (isConnected) {
        return; // use existing connection
    }

    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true; // set the connection state to true
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

export default ConnectDB;
