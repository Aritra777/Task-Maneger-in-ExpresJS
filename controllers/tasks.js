const getAllTasks = (req, res) => {
    res.send('all items');
}
const getTask = (req, res) => {
    res.send(`get item no. : ${req.param.id}`);
}

const postTask = (req, res) => {
    res.json(req.body);
}
const updateTask = (req, res) => {
    res.send(`update task no. ${req.param.id}`);
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