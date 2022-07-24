const axios = require('axios')
const {writeFile} = require('fs');

// axios.get("https://jsonplaceholder.typicodecom/posts")
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})

const fun = async ()=>{
    let result = await axios.get("http://localhost:3000/");
    console.log(result.data);
    
    writeFile("./jsonApi.txt",JSON.stringify(result.data),(err,result)=>{
        console.log(result);
    })
}

fun();