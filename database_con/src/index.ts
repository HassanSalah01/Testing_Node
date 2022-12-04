import express, { Request, Response, Application } from "express";
import client from "./database";
import routes from "./routes/index";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const { SERVER_PORT } = process.env;

// Middleware
app.use(express.json());
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send("Hello world");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on Port ${SERVER_PORT}`);
});
// const test = async () => {
//     const connection = await client.connect();
//     const sql = "select * from products";
//     const result = await connection.query(sql);
//     console.log(result.rows);
//     await connection.release();
// };
// test();

export default app;
