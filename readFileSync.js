// Sync
const {readFileSync} = require('fs')
let result = readFileSync('./test.txt','utf8')
console.log(result);