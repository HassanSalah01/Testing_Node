import express from "express";

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
    res.send("Welcome From User Routes");
});

export default userRoute;
