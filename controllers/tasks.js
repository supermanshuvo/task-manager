const getAllTasks = (req,res)=>{
    res.send('All item');
};
const createTaks = (req,res)=>{
    res.json(req.body);
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