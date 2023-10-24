import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import authRouer from './routers/userAuth.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routers/listing.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to mongoDb");
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server is running at port 3000!");
}
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouer);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});