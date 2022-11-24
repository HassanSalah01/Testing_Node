import express, { Request, Response, Application } from "express";
import routes from "./Routes/index";
import db from "./database";
const PORT = 3000;

const app = express();

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Hello WOrld");
});

db.connect().then((client) => {
    return client
        .query("SELECT * from product")
        .then((res) => {
            client.release();
            console.log(res.rows);
        })
        .catch((err) => {
            client.release();
            console.log(err.stack);
        });
});
const test = async () => {
    const one = await db.connect();
    const two = await one.query("SELECT * from product");
    const three = await two.rows;
    await one.release();
    console.log(three);
};
test();

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
