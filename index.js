import express from "express"
import connectDB from "./db/connectDB.js";
import { deleteMany } from "./models/Movies.js";



const app = express()
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies'

// Database connection 
connectDB(DATABASE_URL);
deleteMany();

app.listen(port, () => {
    console.log(`The Server is listening on PORT ${port}`)
})













