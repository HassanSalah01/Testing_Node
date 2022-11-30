const fs = require('fs');

const first = fs.readFileSync(__dirname+"/text.txt","utf8")
console.log(first);
const wri = fs.writeFileSync("./second.txt",`this is the write file from the first ${first}`)
const sec = fs.readFileSync(__dirname+"/second.txt","utf8");
console.log(sec);
