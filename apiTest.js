const http = require("http");
const EventEmitter = require("events");
const { foo } = require("./events");
const port = 3000;
const arr = [
    { name: "ahmed", age: 20 },
    { name: "ahmed", age: 20 },
    { name: "ahmed", age: 20 },
];

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("log", (x) => {
    foo(x);
});
const server = http.createServer((req, res) => {
    console.log("welcome");
    if (req.url === "/") {
        myEmitter.emit("log", req.url);
        res.end(JSON.stringify(arr));
    } else if (req.url === "/post1") {
        myEmitter.emit("log", req.url);
        res.end(JSON.stringify(arr[0]));
    }
});

server.listen(port, () => {
    console.log("server is running");
});
