
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Router } from 'express';
import cookieParser from 'cookie-parser';




//customimports
import authRouts from './Routes/Auth_and_API.js';
import Orders from './Routes/Orders.js';
import Books from './Routes/Book_Routes.js';
import Reviews from './Routes/Reviews.js';
import db from './utils/db.js';

const router = express.Router();
const app = express();



app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // This should be before routes



app.get("/",(req,res)=>{
    res.send("Welcome To Our BookBaazar");
})

app.use("/v1",authRouts);
app.use("/books",Books);
app.use("/orders",Orders);
app.use("/reviews",Reviews);


db();

const PORT =process.env.port || 5000 ;
app.listen( PORT,()=> console.log(`✅ Server running at: http://localhost:${PORT}`)
);