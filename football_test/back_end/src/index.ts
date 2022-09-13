import express, { Express, Request, Response } from "express";
import { arr } from "./util/Matches";
import cors from "cors";
const app: Express = express();
const port = 3000;

app.use(cors());

app.get("/", (_: Request, res: Response): void => {
    res.status(200);
    res.json(arr);
});

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});
