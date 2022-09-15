import express ,{Request,Response,Express}from "express";
import path from "path";
const app :Express= express();

app.use(express.static(path.join(__dirname,"../public")));
app.get('/',(req:Request,res:Response)=>{
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname,"../public/index.html"));
})


app.listen(3000,()=>{console.log("server is running on port 3000")})