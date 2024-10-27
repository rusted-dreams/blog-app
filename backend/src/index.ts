import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
// console.log(process.env.DB_URL);


connectDB();

app.listen(PORT, ()=>{
    console.log(`server up at http://localhost:${PORT}`);
    
})