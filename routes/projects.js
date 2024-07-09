// routes/projects.js
const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectController');
const auth = require('../middlewares/auth');

// Create project
router.post('/', auth, createProject);

// Get projects
router.get('/', auth, getProjects);

module.exports = router;
