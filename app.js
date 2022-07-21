const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');


// Middleware
app.use(express.json());


// Route
app.get('/hello',(req,res)=>{
   res.send('Task Manager app');
});


app.use('/api/v1/tasks',tasks);


const port = 3000;

const start = async ()=>{
   try{
      await connectDB();
      app.listen(port,function (req,res){
         console.log(`Running port : ${port}`);
      });
   }catch (error){
      console.log(error);
   }
}

start();