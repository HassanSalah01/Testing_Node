import express, { Request, Response } from "express";
const routes = express.Router();
import userRoute from "./api/user";

routes.use("/userRoute", userRoute);
routes.get("/", (req, res) => {
    res.send("Hello From main Routes");
});

export default routes;
