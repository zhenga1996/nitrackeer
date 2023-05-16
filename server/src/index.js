import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js"

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.lxiwyqk.mongodb.net/Cluster0?retryWrites=true&w=majority`);

app.listen(3001, () => console.log("SERVER STARTED"));
