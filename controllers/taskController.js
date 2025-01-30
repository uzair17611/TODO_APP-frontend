const { createTask, getTasksByUser, updateTask, deleteTask ,toggleTaskCompletion } = require('../models/taskModel');

const addTask = (req, res) => {
  const { name, description } = req.body;
  const userId = req.user.id;

  createTask(name, description, userId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, description, userId });
  });
};

const getTasks = (req, res) => {
  const userId = req.user.id;

  getTasksByUser(userId, (err, tasks) => {
    if (err) return res.status(500).json({ error: err.message });

   
    const formattedTasks = tasks.map(task => ({
      ...task,
      is_completed: Boolean(task.is_completed) 
    }));

    res.json(formattedTasks);
  });
};

const editTask = (req, res) => {
  const { id } = req.params;
  const { name, description, isCompleted } = req.body;

  updateTask(id, name, description, isCompleted, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Task updated successfully' });
  });
};

const removeTask = (req, res) => {
  const { id } = req.params;

  deleteTask(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  });
};


const toogetTask=(req,res)=>{
  const { id } = req.params;
    const { is_completed } = req.body; // Expecting a boolean value

    toggleTaskCompletion(id, is_completed, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: 'Task updated successfully', is_completed });
    });
}

module.exports = { addTask, getTasks, editTask, removeTask ,toogetTask };
