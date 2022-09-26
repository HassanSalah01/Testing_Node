const fs = require("fs");
const readLine = require("readline-sync");

fs.readFileSync("test.txt", "utf8", (err, res) => {
    console.log(res);
});

fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
fs.writeFile("test.txt", "welcome Home", (err) => {
    if (err) {
        console.log("error");
    }
});
let txt = readLine.question();
console.log(typeof txt);
let txt2 = readLine.question();
console.log(txt2);
