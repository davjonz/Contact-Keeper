const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
//@access   Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});


// @route   POST api/auth
// @desc    Authenticate a user & get token
//@access   Public
router.post('/', (req, res) => {
  res.send('Authorize user and get token');
});


module.exports = router;