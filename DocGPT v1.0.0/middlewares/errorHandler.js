import express from 'express';
const app = express();

const notFound = (req, res, next) => {
    const error = new Error(`Requested Page${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorLogger = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({
        message: err.message,
        stack: err.stack,
    });
}

export { notFound, errorLogger };
