const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

//localhost:5000/api/auth/login
// router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)

router.post('/login', controller.login); //passport.authenticate('jwt', { session: false })
//localhost:5000/api/auth/register
router.post('/register', controller.register);


module.exports = router;
