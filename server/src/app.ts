//Third-party library imports
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
import userRoutes from "./routes/user-routes.js";

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(morgan("dev")); // Log HTTP requests
app.use(cookieParser(process.env.COOKIE_SECRET)); // Parse cookies

// Routes
app.use("/", userRoutes);

export default app;
