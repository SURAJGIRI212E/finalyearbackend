import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/connectdb.js"
import productsRoute from './routes/products.js';
import Products from './models/ProductModel.js';
dotenv.config()

const app = express();
app.use(cors())
const DATABASE_URL=process.env.DATABASE_URL

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
//Db connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())

// Use routes
app.use('/products', productsRoute);


const importData = async () => {
    try {
      await Products.create(data)
      console.log('data successfully imported')
      // to exit the process
      process.exit()
    } catch (error) {
      console.log('error', error)
    }
  }

// importData()


const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});