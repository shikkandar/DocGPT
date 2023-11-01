import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import connectDB from './db/connectDB.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorLogger } from './middlewares/errorHandler.js';

const DATABASE_URL =
    process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/accountDB';
const app = express();

//Database connectivity
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: true }));

//Use public to serve css and js
app.use(express.static(path.join(process.cwd(), "public")));

//EJS Template Engine
app.set('view engine', 'ejs');

//Parses the JSON data;
app.use(bodyParser.json());

// app.use(notFound);
// app.use(errorLogger);

//My API key
// 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

//Routes
app.use('/home', homeRoutes);
app.use('/auth', authRoutes);
app.use('/doc', uploadRoutes);
app.get('/*', notFound);


app.listen('3000', () => {
    console.log('Server is running on port 3000');
});
