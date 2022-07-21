const Task = require('../models/Task')

const getAllTasks = (req,res)=>{
    res.send('All item');
};
const createTaks = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch (error){
        res.status(500).json({msg: error});
    }
}
const getTaks = (req,res)=>{
    res.json({id:req.params.id});
}
const updateTaks = (req,res)=>{
    res.send('update Single Task')
}
const deleteTaks = (req,res)=>{
    res.send('delete single Task')
}
module.exports = {
    getAllTasks,createTaks,getTaks,updateTaks,deleteTaks
};