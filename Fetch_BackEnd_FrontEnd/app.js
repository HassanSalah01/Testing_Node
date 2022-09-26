const express = require("express");
const app = express();
const Port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.post("/", (req, res) => {
    console.log("request came");
    console.log(req.body);
    const s = req.body.json;
    res.send(s);
    // res.send("Hello World");
});

app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
});
