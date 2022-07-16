// Async
const {writeFile} = require('fs');
writeFile('./testing2.txt',"welcome To hell",(err,result)=>{
    if(err){
        console.log("EROR")
    }else{
        console.log("Result")
    }
});