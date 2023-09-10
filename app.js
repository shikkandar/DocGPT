import express from 'express';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import connectDB from './db/connectDB.js';

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

//Routes
app.use('/', homeRoutes);
app.use('/auth', authRoutes);

app.listen('3000', () => {
    console.log('Server is running on port 3000');
});
