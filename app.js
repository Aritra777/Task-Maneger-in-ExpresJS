const express = require("express");
const app = express();
const tasks = require("./routes/task");

const PORT = 3000;

//MiddleWares
app.use(express.json());
app.use('/api/v1/tasks', tasks);

//Routes
app.get('/hello', (req, res) => {
    res.send("task maneger project");
})

// app.get('app/v1/tasks')                  - get all the task
// app.post('app/v1/tasks')                 - create a new task
// app.get('app/v1/tasks/:id')              - get single task
// app.patch('app/v1/tasks/:id')            - update the task
// app.delete('app/v1/tasks/:id')           - delete the task

//Linsting to the server
app.listen(PORT, () => {
    console.log("server is running on port :", PORT);    
})