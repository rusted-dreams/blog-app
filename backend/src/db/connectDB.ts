import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();


const client = new Client({
    connectionString: process.env.DB_URL
});


export const connectDB = async() => {
    try {
        let result = await client.connect();
        console.log(`connected to db successfully at ${client.host}:${client.port}`);
        
    } catch (error) {
        console.log(`err connecting to db : ${error}`);
    }

}