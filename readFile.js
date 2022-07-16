//Async
const {readFile} = require('fs');
readFile('./test.txt','utf8',(err,result)=>{
    console.log(result);
})
