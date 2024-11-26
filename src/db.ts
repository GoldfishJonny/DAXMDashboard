import mongoose from 'mongoose';
import config from './config';

const MONGO_URL = String(config.url);

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
    };