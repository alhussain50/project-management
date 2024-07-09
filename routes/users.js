const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth'); // Make sure auth middleware is correctly imported
const User = require('../models/User'); // Adjust the path as per your project structure

// GET user details
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
