import  express ,{Request,Response,Express} from "express";
const app:Express = express();
const port:number = 3000;

app.get('/:id/:name',(req:Request,res:Response):void=>{
    console.log(req.params);
    res.status(200);
    res.json({name:"ahmed",age:"15"})
})




app.listen(port,()=>{
    console.log(`server is running on port ${3000}`)
})
