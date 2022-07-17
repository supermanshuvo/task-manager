const getAllTasks = (req,res)=>{
    res.send('All item');
};
const createTaks = (req,res)=>{
    res.send('create Task')
}
const getTaks = (req,res)=>{
    res.send('create Task')
}
const updateTaks = (req,res)=>{
    res.send('update Single Task')
}
const deleteTaks = (req,res)=>{
    res.send('delete single Task')
}
module.exports = {getAllTasks};