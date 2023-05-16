import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({ message: `User "${ username }" already exists!` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: `User "${ username }" registered successfully!` });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    
    if (!user) {
        return res.json({ message: "Your username or password is invalid, please try again!" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user || !passwordValid) {
        return res.json({ message: "Your username or password is invalid, please try again!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);
    res.json({ token, userID: user._id })
});

export { router as userRouter };