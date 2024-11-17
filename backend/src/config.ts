import dotenv from 'dotenv';
import { url } from 'inspector';

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT,
  url: process.env.MONGO_URL,
};

export default config;