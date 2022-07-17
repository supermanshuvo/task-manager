const express = require('express');
const app = express();
const port = 3000;
app.get('/hello',(req,res)=>{
   res.send('Task Manager app');
});
app.listen(port,function (req,res){
   console.log(`Running port : ${port}`);
});