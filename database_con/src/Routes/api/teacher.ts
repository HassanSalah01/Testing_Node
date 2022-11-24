import express from "express";

const teacherRoute = express.Router();

teacherRoute.get("/", (req, res) => {
    res.send("Welcome From User Routes");
});

export default teacherRoute;
