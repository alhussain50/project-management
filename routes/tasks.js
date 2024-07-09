// routes/tasks.js
const express = require('express');
const router = express.Router();
const { createTask, getTasks } = require('../controllers/taskController');
const auth = require('../middlewares/auth');

// Create task
router.post('/', auth, createTask);

// Get tasks
router.get('/', auth, getTasks);

module.exports = router;
