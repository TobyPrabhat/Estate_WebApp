import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to mongoDb");
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log("Server is running at port 3000!");
}
);

app.use('/api/user', userRouter);