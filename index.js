const React=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
res.send("Hello World using git+ dockerhub");
});
app.listen(3000,()=>{
console.log("Server is running in http://localhost:3000${port}");
});
