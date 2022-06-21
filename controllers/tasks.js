const Task = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    // res.send('all items');
    try {
        const allTasks = await Task.find();
        res.status(200).json({allTasks});
    } catch (error) {
        res.status(500).json({massage: error});
    }
}
const getTask = async (req, res) => {
    // res.send(`get item no. : ${req.params.id}`);
    try {
        const reqId = req.params.id;
        const task = await Task.findOne({_id : reqId});
        if(!task){
            return res.status(404).json({msg: `no task with id: ${reqId}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const postTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}
const updateTask = (req, res) => {
    res.send(`update task no. ${req.params.id}`);
}
const deleteTask = (req, res) => {
    res.send("delete Task");
}

module.exports = {
    getAllTasks,
    getTask,
    postTask,
    updateTask,
    deleteTask,
};