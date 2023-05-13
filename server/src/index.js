import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zuqptxl.mongodb.net/?retryWrites=true&w=majority`);

app.listen(3001, () => console.log("SERVER STARTED"));
