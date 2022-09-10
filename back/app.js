const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;

app.use(cors())

app.get('/', (req,res)=>{
    res.json({
        name:"Ahmed",
        age:30
    })

})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})