const Task = require('../models/Task')

const getAllTasks = (req,res)=>{
    res.send('All item');
};
const createTaks = async (req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({task})
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