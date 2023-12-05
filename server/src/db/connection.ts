import { connect, disconnect } from "mongoose";

const connectToDatabase = async () => {
    try {
        await connect('mongodb+srv://AkashSah:HOffsZngsRNxGEzD@cluster0.8kbrh5z.mongodb.net/?retryWrites=true&w=majority/user')
    } catch (error) {
        throw new Error('MongoDB connection failed');
    }
}

const disconnectToDatabase = async () => {
    try {
        await disconnect();
    } catch (error) {
        throw new Error('MongoDB disconnected');
    }
}

export {connectToDatabase, disconnectToDatabase};