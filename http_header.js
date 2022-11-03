const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html " });
    res.write("The date and time are currently ");
    res.end();
});

server.listen(port, () => {
    console.log(`server Start listening on port ${port}`);
});
