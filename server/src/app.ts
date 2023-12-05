import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env);
const app = express();

app.use(express.json());

export default app;