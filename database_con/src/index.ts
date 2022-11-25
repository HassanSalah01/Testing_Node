import express, { Request, Response, Application } from "express";
import routes from "./Routes/index";
import db from "./database";
const PORT = 3000;

const app = express();

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Hello WOrld");
});

// db.connect().then((client) => {
//     return client
//         .query("SELECT * from product")
//         .then((res) => {
//             client.release();
//             console.log(res.rows);
//         })
//         .catch((err) => {
//             client.release();
//             console.log(err.stack);
//         });
// });
const test = async () => {
    const connection = await db.connect();
    const sql = "UPDATE product SET name=$1, age=$2, WHERE id=$3 RETURNING *";
    await connection.query(sql, ["nokia", 200, 1]);

    await connection.release();
};
test();

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
