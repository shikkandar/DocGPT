import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user-routes.js';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/', userRoutes);
export default app;
//# sourceMappingURL=app.js.map