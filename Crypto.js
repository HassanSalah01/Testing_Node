const crypto = require("crypto");
const secret = "Testing Node Crypto";
const salt = "Hello World!!";

const hashing = crypto.createHmac("sha256", secret).update(salt).digest("hex");

console.log(hashing);
