const express = require('express');
const { addTask, getTasks, editTask, removeTask ,toogetTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addTask);
router.get('/', protect, getTasks);
router.put('/:id', protect, editTask);
router.delete('/:id', protect, removeTask);
router.put('/:id/toggle', protect, toogetTask);

module.exports = router;
