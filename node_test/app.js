const add =(x)=>{
    console.log("test 1")
    const f = ses(x)
    console.log(f)
}

const ses=(x)=>{
    console.log("test 2")
    return x+x
}

module.exports={
    add
}