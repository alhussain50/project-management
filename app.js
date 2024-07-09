const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const config = require('config');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
// app.use(express.json({ extended: false }));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express session
app.use(session({
  secret: '21533f8fb2a86b0b17d26b196ff6d73e990b286fdda95ba1e3b43bbef7d5b017253faea03bb388005dc5326c0b508fc753dd542b8c21263d38953e86d57454be',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require('./config/passport')(passport);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Project Management API!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
