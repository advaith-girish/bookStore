import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './route/book.route.js';
import userRoutes from './route/user.route.js';

const conn="mongodb://127.0.0.1:27017/bookstore";
mongoose.connect(conn)
.then(()=>console.log('Connected to database'))
.catch(err=>console.log(err));

const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use("/books",bookRoutes);
app.use("/user",userRoutes);

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});