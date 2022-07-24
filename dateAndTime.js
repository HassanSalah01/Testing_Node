
const getDates=()=>{
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

const getTimes=()=>{
    const date = new Date();
    return `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
}

module.exports = {
    getDates,getTimes
}