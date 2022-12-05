// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";

const user = {
    userName: "sara",
    password: "mypass1",
};

const hash = await bcrypt.hash(user.password, 12);
const isRight = await bcrypt.compare(gfdgfdg, hash);

console.log(isRight);
