const str = "Hello World!";
const buff = Buffer.alloc(str.length);

buff.write(str);
console.log(buff);
if (buff[3] == buff[0]) {
    console.log("Yes");
} else {
    console.log("No");
}
console.log(buff.toString());
for (let i of buff) {
    console.log(i.toString());
}
