const crypto = require("crypto");
const fs = require("fs");
fs.readFile("ttt.txt", "utf8", (err, data) => {
    const secret = "HarryPotter";
    console.log(data);
    const hashing = crypto
        .createHmac("sha256", secret)
        .update(data)
        .digest("hex");

    console.log(hashing);
});

// f09d15f2319e12513d65f551e578bfced94e3e793c956593628bb1f0fea753e6
