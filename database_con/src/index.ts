import express, { Request, Response, Application } from "express";
import cors from "cors";
import routes from "./routes/index";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const { SERVER_PORT } = process.env;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/", routes);

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

//     const p = {
//         name: "ii34324ii",
//         manufacture: "tttt",
//         amount: 544,
//         id: 1,
//     };

//     const sql =
//         "UPDATE products set product_name=$1 ,product_amount=$2 ,product_manufacture=$3 WHERE id=$4 RETURNING *";
//     const result = await connection.query(sql, [
//         p.name,
//         p.amount,
//         p.manufacture,
//         p.id,
//     ]);
//     console.log(result.rows);
//     await connection.release();
// };
// test();

export default app;
