const {writeFile} = require("fs").promises;
const {getDates,getTimes} = require("./dateAndTime")


const foo = async(x)=>{
    await writeFile("./text.txt",`${getTimes()}---${getDates()}---URL:${x}\n`,{flag:"a"})
};
module.exports={
    foo
}