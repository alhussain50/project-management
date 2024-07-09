const express = require('express');
const router = express.Router();
const passport = require('passport');
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const auth = require('../middlewares/auth');

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(400).json({ message: info.message });
  
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.json({ user, message: 'Logged in successfully' });
      });
    })(req, res, next);
  });

// Get user details
router.get('/users', auth, getUser);

module.exports = router;
