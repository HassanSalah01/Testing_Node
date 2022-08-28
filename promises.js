const users = [{id:1,name:"ahmed"},{id:2,name:"sara"},{id:2,name:"karima"}];
const datas = [{id:1,art:[1,2,3]},{id:2,art:[3,4,5]},{id:3,art:[6,7,8]}];

const getUser=(name)=>{
    return new Promise((resolve,reject)=>{
        let userId = users.filter((user)=>{
            return user.name == name;
        })
        if(userId.length!=0){
            resolve(userId)
        }else{
            reject("No name Match query")
        }
    })
}
const asyawait = async (x)=>{
    try {
        let user = await getUser(x);

    }catch(error) {
        
    }
}
asyawait("ahmed")
// getUser("ahmed").then((data)=>{
//     let x = data[0].id;
//     console.log(datas[x].art)
// }).catch((err)=>{console.log(err)});
const gaetUser=()=>{}



// let x = users.filter((name)=>{
//     return name.id ==2
// })
// console.log(x);

// setTimeout(()=>{
//     console.log("test 1 ")
//     setTimeout(()=>{
//         console.log("test 2 ")
//         setTimeout(()=>{
//             console.log("test 3")
//         },3000)
//     },2000)
// },1000)

// let promise = new Promise((resolve,reject)=>{

// })








// const {readFile} = require("fs");

// const s = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf8",(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// let testOne=(resolve,reject)=>{

// }
// let testTwo=(err,data)=>{
//     if(err){
//         /////////////
//     }else{
//         ////////////////
//     }
// }
