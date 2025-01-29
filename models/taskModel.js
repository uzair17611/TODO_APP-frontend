const db = require('../config/db');

const createTask = (name, description, userId, callback) => {
  const query = 'INSERT INTO tasks (name, description, user_id) VALUES (?, ?, ?)';
  db.query(query, [name, description, userId], callback);
};

const getTasksByUser = (userId, callback) => {
  const query = 'SELECT * FROM tasks WHERE user_id = ?';
  db.query(query, [userId], callback);
};

const updateTask = (id, name, description, isCompleted, callback) => {
  const query = 'UPDATE tasks SET name = ?, description = ?, is_completed = ? WHERE id = ?';
  db.query(query, [name, description, isCompleted, id], callback);
};

const deleteTask = (id, callback) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], callback);
};

module.exports = {
  createTask,
  getTasksByUser,
  updateTask,
  deleteTask,
};
